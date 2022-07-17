leftWristx=0;
rightWristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(600,600);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);

    }
}

function draw(){
    background("#9DC6FF");
    textSize(difference);
    fill("#F4FF90");
    text('Jana',30,100);
}






