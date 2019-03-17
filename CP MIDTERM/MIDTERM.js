


var sound1
var bubbles = [];
var bubblespeed=2;
var bubbleX= bubblespeed;

function preload() {
  soundFormats('mp3');
    sound1 = loadSound( 'bubble.mp3');

}
function setup() {
    createCanvas(600, 600);

    for (var i = 0; i < 100; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(50, 100)
        };
        bubbles.push(bubble);
    }
}
function draw() {
     background(84,116,169);
  fill(244,247,252);
  stroke(244,247,25);

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1);
                sound1.play();// remove this bubble!
            }
        }
    }

  ellipse(bubble.x, bubble.y, bubble.radius*2);


      bubble.x += bubbleX;

     if (bubble.x>=600){
    bubbleX = -2;
  }
      if (bubble.x<0){
    bubbleX = 2;
      }

}
