objects = [];
video = "";
Status = "";

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,360);
    video.hide();
}
function draw(){
    image(video,0,0,480,360);
    if(Status != ""){
    objectDetector.detect(video,gotResults);
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        fill("red");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%", objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        if(objects[i].label == object_name){
            video.stop();
            objectDetector.detect(video,gotResults);
            document.getElementById("number_of_objects").innerHTML = object_name+" Found";
            synth = window.speechSynthesis;
            utterThis = new SpeechSynthesisUtterance(object_name+"Found");
            synth.speak(utterThis);
        }
        else{
            document.getElementById("number_of_objects").innerHTML = object_name+" not Found";
        }
    }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("Object_names").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results; 
}
