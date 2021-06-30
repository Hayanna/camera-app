var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
const video = document.querySelector('#myVidPlayer');
	
//w-width,h-height
var w, h;
canvas.style.display = "none";
var i = 0;
var txt = 'Estas pronto para conhecer o seu duo?'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();

window.navigator.mediaDevices.getUserMedia({ video: true})
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
	    video.play();

	    //new
	    w = video.videoWidth;
	    h = video.videoHeight;

	    canvas.width = w;
	    canvas.height = h;
	};
})
