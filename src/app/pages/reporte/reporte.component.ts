import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
let reporte;
let ancla;


//Videocamara
function comprobar() {
  reporte= document.getElementsByClassName("reporte").item(0);
  ancla=document.querySelector("li.reporte a");
  console.log(ancla)
  ancla.addEventListener("click",startup,false);
  
  if(reporte.classList.contains("active")){
    startup();
  }
}


var width = 425;    
var height = 0;     

var streaming = false;
var video = null;
var canvas = null;
var photo = null;
var startbutton = null;
var cancel_button= null;

function startup() {
  console.log("clic")
  video = document.getElementById('video');
  canvas = document.getElementById('canvas');
  photo = document.getElementById('photo');
  startbutton = document.getElementById('startbutton');
  cancel_button=document.getElementById('cancel_button')

  photo.setAttribute("class","hidden")

  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.log("An error occurred: " + err);
  });

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
    
      // Firefox currently has a bug where the height can't be read from
      // the video, so we will make assumptions if this happens.
    
      if (isNaN(height)) {
        height = width / (4/3);
      }
    
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      photo.setAttribute('width', width);
      photo.setAttribute('height', height);
      streaming = true;
      let cont_botones= document.getElementById("contenedor_botones");
      cont_botones.setAttribute("class","hidden")
    }
  }, false);

  startbutton.addEventListener('click', function(ev){
    takepicture();
    ev.preventDefault();
    non_visible();

  }, false);
  
  clearphoto();

  cancel_button.addEventListener('click', function(ev){
    visible();
  })
  
}


// Fill the photo with an indication that none has been
// captured.

function clearphoto() {
  var context = canvas.getContext('2d');
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

// Capture a photo by fetching the current contents of the video
// and drawing it into a canvas, then converting that to a PNG
// format data URL. By drawing it on an offscreen canvas and then
// drawing that to the screen, we can change its size and/or apply
// other changes before drawing it.

function takepicture() {
  var context = canvas.getContext('2d');
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
  
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  } else {
    clearphoto();
  }
}

function stop(){
  if(!reporte.classList.contains("active")){
    console.log("no")
    streaming=false;
    video.srcObject.getTracks()[0].stop()
  }
}

//document.querySelector()

function non_visible(){
  let cont_video=document.getElementById("video")
  cont_video.setAttribute("class","hidden");

  let cont_photo=document.getElementById("photo")
  cont_photo.setAttribute("class","visible");

  let cont_botones= document.getElementById("contenedor_botones");
  cont_botones.setAttribute("class","contenedor_botones")

  let boton_tomar= document.getElementById("pick_button");
  boton_tomar.setAttribute("class","hidden")
}

function visible(){
  let cont_video=document.getElementById("video")
  cont_video.setAttribute("class","visible");
  
  let cont_photo=document.getElementById("photo")
  cont_photo.setAttribute("class","hidden");

  let cont_botones= document.getElementById("contenedor_botones");
  cont_botones.setAttribute("class","hidden")

  let boton_tomar= document.getElementById("pick_button");
  boton_tomar.setAttribute("class","visibles")
}






window.addEventListener("load",comprobar ,true);
window.addEventListener("click",stop);





