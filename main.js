function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPosses);
}

function modelLoaded(){
    console.log('model Loaded');
}

function gotPosses(results){
    if(results.lenght>0){
        console.log(results);
    }
}