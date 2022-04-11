window.alert("hello world");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
ctx.fillStyle = "#0000FF";

setInterval(update, 1000);

function update()
{
  drawSquare();
}

function drawSquare()
{
  ctx.fillRect(x, y, 20, 20);
  for(var i = 0; i < coinArray.length; i++)
    {
        ctx.fillStyle = coinArray[i].mainColor;
        ctx.fillRect(coinArray[i].x, coinArray[i].y, coinArray[i].width, coinArray[i].height);
    }
}

/*



$(document).ready(function(){
    
    setup();
    
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    coin1 = new Coin(100,100,50,50,"blue")
    $.getJSON("data/coins.json", function(data) {
        for(var i = 0; i < data.coins.length; i++)
        {
            coinArray.push(new Coin(data.coins[i].x,data.coins[i].y, data.coins[i].h, data.coins[i].w, data.coins[i].color));
        }
        drawSquare();
    });
    

    
}

function drawSquare()
{
  ctx.fillRect(x, y, 20, 20);
  for(var i = 0; i < coinArray.length; i++)
    {
        ctx.fillStyle = coinArray[i].mainColor;
        ctx.fillRect(coinArray[i].x, coinArray[i].y, coinArray[i].width, coinArray[i].height);
    }
}

 



*/