const indicies=[
  {
    name: "open",
    index: 8,
    color: "#EF76A8"
  },
  {
    name: "conscient",
    index: 9,
    color: "#4B3F32"
  },
  {
    name: "agreeable",
    index: 10,
    color: "#E3BD34"
  },
  {
    name: "extraversion",
    index: 11,
    color: "#E5244B"
  },
  {
    name: "range",
    index: 12,
    color: "#54D59D"
  }
];


const filename = "moana.csv";
$.get(filename, function(values) {
  data = Papa.parse(values);
  data = data.data.slice(1);

  // Also ~ .3 degrees  (3 degrees )
  const arcLength = (2 * Math.PI) / data.length;  // TODO
  const width = 60 * 72; // 4320
  const center = width / 2;
  const offset = 7.8 * 72;
  const svg = document.getElementById("svg");

  const rectSize = 0.038 * 72;
  const heightScale = 2.6 * 72;

  const radialGridDegrees = 3;  // 6 degreees is missing for legend data

  let r, t, x, y = 0;
  let pathString = '';

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


  for (t = 0; t < data.length; t = t + 1) {
    let datum = data[t];
    for(item of indicies) {
      let index = item.index;
      let color = item.color;
      let value = datum[index];
      r = (value * heightScale * (rectSize + 1)) + offset;
      console.log(color);
      for (let tmpR = offset; tmpR < r; tmpR = tmpR + rectSize + 1) {
        arcSquare(tmpR, t * arcLength, 0, center, color);
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
