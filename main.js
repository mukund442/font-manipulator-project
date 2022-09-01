function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPosses);
}

function draw(){
    background('#A9E5EF');
    fill('##D0EFA9');
    stroke('##D0EFA9')
    text('Mukund', 50, 40);
}

function modelLoaded(){
    console.log('moidel Loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        console.log("nose x:"+nosex+"nose y:"+nosey)

        rightwristx=result[0].pose.rightwrist.x;
        leftwristx=result[0].pose.leftwrist.x;
        difference=float(leftwristx-rightwristx);
        console.log("rightwrist x:"+rightwristx+"leftwrist"+leftwristx+"difference:"+difference)
    }
}

nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;