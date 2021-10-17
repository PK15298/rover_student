canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaimagearray = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg", "nasa5.jpg"];

randomnumber = Math.floor(Math.random() * 4);
console.log(randomnumber);
rwidth = 100;
rheight = 90;

background_image = nasaimagearray[randomnumber];
rover_image = "rover.png";

roverx = 10;
rovery = 10;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = ubground; 
	background_imgTag.src = background_image;   

	rover_imgTag = new Image(); 
	rover_imgTag.onload = urover; 
	rover_imgTag.src = rover_image;  
}

function ubground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function urover() {
	ctx.drawImage(rover_imgTag, roverx, rovery, rwidth, rheight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rovery >=0)
	{
		rovery = rovery - 10;
		console.log("When up arrow is pressed,  x = " + roverx + " | y = " +rovery);
		 ubground();
		  urover();
	}
}
function down()
{
	if(rovery <=500)
	{
		rovery =rovery+ 10;
		console.log("When down arrow is pressed,  x = " + roverx + " | y = " +rovery);
		ubground();
		  urover();
	}
}
function left()
{
	if(roverx >= 0)
	{
		roverx =roverx - 10;
		console.log("When left arrow is pressed,  x = " + roverx + " | y = " +rovery);
		ubground();
		  urover();
	}
}
function right()
{
	if(roverx <= 700)
	{
		roverx =roverx + 10;
		console.log("When right arrow is pressed,  x = " + roverx + " | y = " +rovery);
		ubground();
		 urover();
   }
}
	