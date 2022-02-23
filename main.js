x = 0;
y = 0;
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
speak_data = "";
to_number = ""; 
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  canvas = createCanvas(screen_width-150 , screen_height-150);
  canvas.position(0 , 150);
}   
 
recognition.onresult = function(event) {
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_app = "set";
    for (var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple , x , y ,50 ,50);
    }
  }
  else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number"
  }
 console.log(event); 

var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  loadImage('apple.png');
}




















