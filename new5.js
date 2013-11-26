var canvas=document.getElementById("mycan");
var ctx=canvas.getContext("2d");
var w=canvas.width,h=canvas.height;
/*ctx.beginPath();
ctx.moveTo(330,450);
ctx.lineTo(430,450);
ctx.stroke();*/

//cherta
ctx.fillRect(w-430,h-50,100,10);
ctx.beginPath();

//topche
ctx.arc(w/2,h/2+20,10,0,360);
ctx.stroke();

//tuhli
for(var i=10;i<w-20;i+=110)
{
	for(var j=10;j<h/2;j=j+30)  ctx.fillRect(i,j,100,20);
}