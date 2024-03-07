// PLAYER 1
// Generate Random Number 1-6
let randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1);

//Mengambil image generate random number
var randomDiceImg = "dice" + randomNum1 + ".png";

//Set random image based on random number
const randomImgSource = `images/${randomDiceImg}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

// PLAYER 2
// Generate Random Number 1-6
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2);

//Mengambil image generate random number
var randomDiceImg2 = "dice" + randomNum2 + ".png";

//Set random image based on random number
const randomImgSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
