window.onload = function()
{
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	//D
	crearLinea(10,10,10,300);
	crearLinea(10,300,180,150);
	crearLinea(10,10,180,150);
	//A
	crearLinea(200,300,200,30);
	crearLinea(200,30,300,30);
	crearLinea(300,300,300,30);
	crearLinea(200,150,300,150);
	//N
	crearLinea(350,300,350,30);
	crearLinea(350,30,400,300);
	crearLinea(400,300,400,30);
	//I
	crearLinea(450,30,550,30);
	crearLinea(500,300,500,30);
	crearLinea(450,300,550,300);
	//E
	crearLinea(600,30,700,30);
	crearLinea(600,300,600,30);
	crearLinea(600,300,700,300);
	crearLinea(600,150,700,150);
	//L
	crearLinea(750,30,750,300);
	crearLinea(750,300,850,300);

	function crearLinea(x1,y1,x2,y2)
	{ 	
		context.beginPath();
		context.moveTo(x1,y1);
		context.lineTo(x2,y2);
		context.lineWidth = 10;
		context.strokeStyle = randomColor();
		context.stroke();
	}
	function randomColor()
    {
       // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
       return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
     };
}
