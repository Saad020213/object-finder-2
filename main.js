function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 426, 80);
    circle(590, 50, 80);
    circle(50, 50, 80); 
    circle(590, 426, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 25, 295);
    rect(580, 90, 25, 295);
}

function take_snapshot() {
    save('Nice_Face.png');
}