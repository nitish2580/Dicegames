var randomnumber1=Math.random();
randomnumber1=Math.floor((6*randomnumber1)+1);
var randomDiceImage = "dice" + randomnumber1 + ".png";
var randomImageSource="images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
//****************************** player 2 **************************

var randomnumber2=Math.random();
randomnumber2=Math.floor((6*randomnumber2)+1);
var randomDiceImage2="dice" + randomnumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

var winner=document.querySelector("h1");
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins";

}
else{
    document.querySelector("h1").innerHTML = "Draw";

}