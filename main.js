function preload(){

}
function setup(){
    canavs = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
    save('myfilter.png');
}
classifier = ml5.imageClassifier('modelLoaded',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
console.log("nose x = " + results[0].pose.nose.x)
console.log("nose y = " + results[0].pose.nose.y)
}
}