/* global $ Papa */

const offset = 60;
const center = 250;
const heightScale = 100;
const svg = document.getElementById("svg");
// const indicies=[
//   {
//     name: "extraversion",
//     index: 11,
//     color: "#bd504d"
//   }
// ];


function addPath(pathString) {
  let newElement =  document.createElementNS("http://www.w3.org/2000/svg", "path");
  newElement.setAttributeNS(null, "d", pathString);   // Set path's data
  newElement.style.stroke = "#000";           // Set stroke color
  newElement.style.fill = "none";             // Set fill
  newElement.style.strokeWidth = "1";         // Set stroke width
  svg.appendChild(newElement);
}

function arcLines(data, index) {
  let r, t, x, y = 0;
  let pathString = '';
  const arcLength = (2 * Math.PI) / data.length;
  for(t = 0; t < data.length; t = t + 1) {
    r = data[t][index] * heightScale;
    x = (Math.sin(t * arcLength) * (r + offset)) + center;
    y = (Math.cos(t * arcLength) * (r + offset)) + center;
    if (t == 0 ) {
      pathString = pathString.concat(`M${x} ${y}`);
    }
    else {
      pathString = pathString.concat(` L${x} ${y}`);
    }
  }
  pathString = pathString.concat(" Z");
  addPath(pathString);
}



const filename = "moana.csv";
$.get(filename, function(values) {
  let data = Papa.parse(values);
  data = data.data.slice(1);
  arcLines(data,11);
});