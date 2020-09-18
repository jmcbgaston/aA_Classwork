/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
};

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    let oppColor = "";

    if (this.color === "white") {
        oppColor = "black";   
    } else if (this.color === "black") {
        oppColor = "white";
    }

    return oppColor;
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color = this.oppColor();
    return this.color;
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    return (this.color) === "white" ? "W" : "B";
};

module.exports = Piece;
