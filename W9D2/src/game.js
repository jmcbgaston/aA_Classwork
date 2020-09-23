function Game({dim_x, dim_y, num_asteroids}) {
    this.dim_x = 1000;
    this.dim_y = 600;
    this.num_asteroids = num_asteroids;
}

Game.prototype.addAsteroids = function() {

}

const starting = []

let y = Math.floor(Math.random() * 600);
startLeft = [1000, y]
startRight = [0, y]
let x = Math.floor(Math.random() * 1000);
startBottom = [x, 600]
startTop = [x, 0]

