function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var colorCode = "#";
  for (var i = 0; i < 6; i++) {
    colorCode += letters[Math.floor(Math.random()*16)];
  }
  return colorCode
}

var header = document.querySelector("h1");
function setRandomColor(){
  var ranColor = getRandomColor();
  header.style.color = ranColor;
}

setInterval("setRandomColor()", 500);
