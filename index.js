var randomNumber1=Math.random();
randomNumber1=randomNumber1*5 + 1;
randomNumber1=Math.round(randomNumber1);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*5 + 1;
randomNumber2=Math.round(randomNumber2);
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 is winner";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 is winner";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
