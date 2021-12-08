function setup(){
  video = createCapture(VIDEO);
  video.size(500,500);   
  canvas = createCanvas(500,500);
  canvas.position(560,80);
  PoseNet = ml5.poseNet(video,Modelloaded);
  PoseNet.on("pose",gotposes);
}
function draw(){
    background("#808080");

}

function Modelloaded(){
    console.log("Model is loaded boom!");
    
}
function gotposes(result){
  if(result.length > 0){
    console.log(result);
  }
}