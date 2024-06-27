var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; // C41//SA
var cars = [];
var blastImage;                   //C42// SA

function preload() {
  backgroundImage = loadImage("./assets/race-track-start-finish-line-260nw-1444312337.webp");
  car1_img = loadImage("../assets/huracan-side-view-511x339-removebg-preview.png");
  car2_img = loadImage("../assets/237-2375806_porsche-911-gt3-rs-911-gt3-rs-min-removebg-preview.png");
  track = loadImage("../assets/race-track-start-finish-line-260nw-1444312337.webp");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); // C41//SA
  obstacle2Image = loadImage("./assets/obstacle2.png"); // C41//SA
  blastImage = loadImage("./assets/blast.png"); //C42 //SA
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowHeight, windowWidth );
}
