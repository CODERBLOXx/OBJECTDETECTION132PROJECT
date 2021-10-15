img = "";
status = "";
objects = []

function back_airport(){
    window.location = "index.html";
}

function preload(){
    img = loadImage("Airport.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("airport_status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    status = true;
    objectDetector.detect(canvas,gotResult);
    console.log("Object Detector is initialized");
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}