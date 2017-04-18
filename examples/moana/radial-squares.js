/* global $ Papa */
const indicies=[
  {
    name: "open",
    index: 8,
    color: "#d18a86"
  },
  {
    name: "conscient",
    index: 9,
    color: "#594b41"
  },
  {
    name: "agreeable",
    index: 10,
    color: "#d8b665"
  },
  {
    name: "extraversion",
    index: 11,
    color: "#bd504d"
  },
  {
    name: "range",
    index: 12,
    color: "#649b95"
  }
];


const filename = "moana.csv";
$.get(filename, function(values) {
  let data = Papa.parse(values);
  data = data.data.slice(1);
  // 30 big squares fo 90d 30 * 40 = 120
  // Also ~ .3 degrees  (3 degrees per 10 boxes)
  const arcMargin = 0.10472;
  const arcOffset = arcMargin / 2;
  const arcStart = -1.5708 - arcOffset;
  const arcLength = (2 * Math.PI -arcMargin) / data.length;
  const width = 60 * 72; // 4320
  const center = width / 2;
  const offset = 7.8 * 72;
  const svg = document.getElementById("svg");

  const rectSize = 0.035 * 72;

  // for the record:
  // const heightScale = 2.6 * 72;
  // const radialGridDegrees = 3;  // 6 degreees is missing for legend data


  function rad2Deg(radians) {
    return (radians / Math.PI) * 180;
  }

  function arcSquare(r, t, offset, radialCenter, color) {
    const degrees = rad2Deg(t);
    let x = (Math.sin(t) * r + offset) + radialCenter;
    let y = (Math.cos(t) * r + offset) + radialCenter;
    x = x - rectSize / 2;
    y = y - rectSize / 2;
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("height", rectSize);
    rect.setAttribute("width", rectSize);
    rect.setAttribute("fill", color);
    rect.setAttribute("transform", `rotate(${degrees * -1} ${x} ${y})`);
    svg.appendChild(rect);
  }

  let r, t = 0, item, index, value, color, datum;
  let sorted = [];
  for (t = 0; t < data.length; t = t + 1) {
    datum= data[t];
    sorted = [];
    for(item of indicies) {
      index = item.index;
      color = item.color;
      value = datum[index];
      r = (value * 40);
      sorted.push(
        { color: item.color,
          value: value,
          r: r
        });
    }

    sorted.sort(function(a,b) {
      if(a.value < b.value) { return 1; }
      if(a.value > b.value) { return -1; }
      return 0;
    });

    for(item of sorted) {
      color = item.color;
      r = item.r;
      console.log(color);
      for (let tmpR = 0; tmpR < r; tmpR = tmpR + 1) {
        arcSquare(tmpR * (rectSize +1) + offset, arcStart - (t * arcLength), 0, center, color);
      }
    }
  }


  //get svg source.
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  //add name spaces.
  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  //set url value to a element's href attribute.
  document.getElementById("link").href = url;
  //you can download svg file by right click menu.
});
