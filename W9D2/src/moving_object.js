function MovingObject({pos, vel, radius, color}) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

// const MovingObject = function(pos, vel, radius, color) {
//     this.pos = pos;
//     this.vel = vel;
//     this.radius = radius;
//     this.color = color;
// };

// {p1: 150, p2: 150, radius: 50, color: "blue"}
MovingObject.prototype.draw = function(ctx) {
    // debugger;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
        );

    ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
    let newX = this.pos[0] + this.vel[0]
    let newY = this.pos[1] + this.vel[1]
    this.pos = [newX, newY];
    // return this;
    // return this.draw(ctx);
};

module.exports = MovingObject;