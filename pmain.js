noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPpTDJ8xtGWLM4_vKTrchhfUO1Rg5QCqR8g&usqp=CAU');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Intialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = result[0].pose.nose.x - 10;
        noseY = result[0].pose.nose.y - 10;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 80, 35);
}

function take_snapshot(){
    save('myFilterImage.png');
}

