rightEyeX=0;
rightEyeY=0;
leftEyeX=0;
leftEyeY=0;
function preload(){
    laser_eye=loadImage("https://i.postimg.cc/DZtSmxD1/Laser-Eye-img.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        rightEyeX=results[0].pose.rightEye.x-10;
        console.log("rightEyeX="+rightEyeX);
        rightEyeY=results[0].pose.rightEye.y-10;
        console.log("rightEyeY="+rightEyeY);

        leftEyeX=results[0].pose.leftEye.x-10;
        console.log("leftEyeX="+leftEyeX);
        leftEyeY=results[0].pose.leftEye.y-10;
        console.log("leftEyeY="+leftEyeY);
    }
    
}
function modelLoaded(){
    console.log("pooos nat is inisolized");
}
function draw(){
image(video,0,0,300,300);
image(laser_eye,rightEyeX,rightEyeY,20,20);
image(laser_eye,leftEyeX,leftEyeY,20,20);
}
function take_snapshot(){
    save("Extremo_Funnyo.png");
}
