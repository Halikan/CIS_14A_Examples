//store an interval in a variable
var pause=1000;
//create an initialize counter
var n=0;
//create an array
var imgs=new Array("pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","pic6.jpg","pic7.jpg","pic8.jpg","pic9.jpg","pic10.jpg");
//preload all images
var preload=new Array();
for(var i=0; i<=imgs.lenght; i++)
   {
     preload[i]=new Image();
     preload[i].src=imgs[i];
   }

  // A function to display each picture for the set interval
     function rotate()
     {
       n=Math.round(10*Math.random())%10;
        document.images.pic.src=imgs[n];
         setTimeout("rotate()",pause);
      }
      //specify the onload event
         window.onLoad=rotate();