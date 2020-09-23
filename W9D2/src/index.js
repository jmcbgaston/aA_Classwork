const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

window.addEventListener('DOMContentLoaded', function(event) {
  
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  
  let ctx = canvasEl.getContext('2d');

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);

  window.MovingObject = MovingObject;
  window.Util = Util;
  window.Asteroid = Asteroid;
  window.ctx = ctx;
});
