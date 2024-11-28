var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// alert(randomNumber1);
// alert(randomNumber2);
var diceimage1 = "./images/" + "dice" + randomNumber1 + ".png";
var diceimage2 = "./images/" + "dice" + randomNumber2 + ".png";
// alert(diceimage);
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", diceimage1)
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", diceimage2)
if (randomNumber1 > randomNumber2) {
    var player1 = document.querySelector("h1").innerHTML  = "Player 1 Wins!"  
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} 
else {
    document.querySelector("h1").innerHTML = "Draw"
}
