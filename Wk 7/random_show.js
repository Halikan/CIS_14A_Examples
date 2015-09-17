// Here we're going to create only functions and calculations. Then, in another file, an HTML file, we're going to put it all together.
// Arrays are discussed in Chapter 8 of the textbook.

//store an interval in a variable
var pause=1000;														//1000 == 1 second; the unit used is milliseconds

//create an initialize counter
var n=0;

//create an array
var imgs=new Array("pic1.jpg", "pic2.jpg",							// An array is a collection of the same data type.
"pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg",						// Elements of an array: 1)Name 2)Data Type 3)Size
"pic7.jpg", "pic8.jpg", "pic9.jpg", "pic10.jpg");					// Arrays and for loops commonly go together

//preload all images
var preload=new Array();
for (var i=0; i<=imgs.length; i++)
	{
	preload[i]=new Image();
	preload[i].src=imgs[i];
	}

// A function to display each picture for the set interval.
function rotate()
	{
	n=Math.round(10*Math.random())%10;
	document.images.pic.src=imgs[n];
	setTimeout("rotate()",pause);
	}

// Specify the onload event.
window.onLoad=rotate();