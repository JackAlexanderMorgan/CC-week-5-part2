let myColors =[];
let xPos = 0;

function setup() {
  // put setup code here
  createCanvas(1024,400);
  for (let i = 0; i < 256; i++){
    myColors.push(i);
  }
  console.log(myColors);
  myColors.reverse();
  //myColors = shuffle(myColors);
}

function draw() {
  // put drawing code here
  noStroke();
  for (let i = 0; i < myColors.length; i++){
    fill(myColors[i],20,100);
    rect(xPos, 0, width/256, height);
    xPos = xPos+(width/256);
  }
}
