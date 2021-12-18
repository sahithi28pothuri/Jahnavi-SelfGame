var canvas;
var database, gameState;
var form,game, player, playerCount;


function preload() {
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game();
  game.start();
  game.play();
  

}

function draw() {
  background("blue");

  if (playerCount === 1) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
