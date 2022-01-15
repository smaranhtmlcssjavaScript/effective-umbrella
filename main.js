noseX = 0;
noseY = 0;
function preload() {
    moostache = loadImage("https://i.postimg.cc/nV0Qbs5q/moostache.png");
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(moostache, noseX, noseY, 45, 45)
}
function takeSnapshot() {
    save('filterimage.png'); 
}

function modelLoaded() {
    console.log("posenet is initalized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 22;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x: "+ results[0].pose.nose.x + ", nose y: " + results[0].pose.nose.y);
    }
}