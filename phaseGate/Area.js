const prompt = require("prompt-sync")();

let widthNumber = prompt("Enter width:");

let heightNumber = prompt("Enter width:");




function CaculateArea(width, height){

let area = 0.5*width * height

return area

}

console.log(CaculateArea(widthNumber,heightNumber));