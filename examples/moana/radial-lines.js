const data = [
  .1, .1, .2, .1, .2, .3, .4, .5, .1, .6, .8,
  .2, .4, .6, .3, .7, .6, .5, .1, .1, .2, .9,
  .5, .6, .1, .1, .2, .3, .4, .5, .1, .6, .12,
  .4, .8, .9, .5, .7, .2, .6, .7, .7, .2, .2
];

const arcLength = (2 * Math.PI) / data.length;
const offset = 60;
const center = 250;
const heightScale = 100;
const svg = document.getElementById("svg");

let r, t, x, y = 0;
let pathString = '';





function addPath(pathString) {
  let newElement =  document.createElementNS("http://www.w3.org/2000/svg", "path");
  newElement.setAttribute("d", pathString);   // Set path's data
  newElement.style.stroke = "#000";           // Set stroke color
  newElement.style.fill = "none";             // Set fill
  newElement.style.strokeWidth = "1";         // Set stroke width
  svg.appendChild(newElement);
}

for(t = 0; t < data.length; t = t + 1) {
  r = data[t] * heightScale;
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


