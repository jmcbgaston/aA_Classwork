Array.prototype.uniq = function () {
    let unique = [];

    for (let i = 0; i < this.length; i++) {
        if (unique.indexOf(this[1]) === -1) { 
            unique.push(this[i]);
        }
    }
};

Array.prototype.zeroSum = function() {
    const pairs = [];

    for (let i = 0; i < this.length; i++){
        for (let j = (i+1); j < this.length; j++){
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
};


Array.prototype.transpose = function() {
    
    // creates a new array
    let two_d_arr = new Array(this.length);
    // transforms an array into a 2D array
    for (let i = 0; i < two_d_arr.length; i++) {
        two_d_arr[i] = new Array(this.length);
    }
    // transposed array that does not modify original
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            two_d_arr[i][j] = this[j][i];
        }
    }
    
    // new, transposed array 
    return two_d_arr
};

let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr.transpose());

// var arr = [[1,2,7],[4,5,3],[7,8,4]]
