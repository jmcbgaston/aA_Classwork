const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

// let options = {pos, vel, radius, color}

function Asteroid(options) {
    // options.pos = options.pos;
    // options.vel = options.vel;
    // class Asteroid extends MovingObject {
    //     constructor(pos) {
    // super(pos);
    // options.radius = options.radius || 50;
    options.radius = 50;
    // options.color = options.color || "purple";
    options.color = "purple";
    // let x = Math.floor(Math.random() * 1000);
    // let y = Math.floor(Math.random() * 600);
    // this.vel = [x, y];
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
