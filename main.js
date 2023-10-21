canvas=document.getElementById("hola");
var ctx=canvas.getContext("2d");
rover_width=200; rover_height=200;
background_image="mars.jpg"; 
rover_image="rover.png"
rover_x=500;
rover_y=200
function asd(){
    background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", stumblero07);
function stumblero07(e){
	s=e.keyCode;
	if(s=="38"){
		 up();
	}
	if(s=="40"){
		down()
	}
	if(s=="39"){
		right()

	}
	if(s=="37")
	{left()
	}

}




function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("Cuando se presione la flecha hacia abajo,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("Cuando se presione la flecha izquierda,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function up()
{
	if(rover_y >=0)
	{
		rover_y =rover_y -10;
		console.log("Cuando se presione la flecha hacia abajo,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <=700)
	{
		rover_x =rover_x + 10;
		console.log("Cuando se presione la flecha izquierda,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}