let socket = io();


let side = 20

function setup() {
        frameRate(5)
        createCanvas(matrix[0].length * side, matrix.length * side)
}




function sarqel(matrix) {
        console.log(matrix);

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                fill("green");
                                rect(x * side, y * side, side, side)
                        } else if (obj == 2) {
                                fill("yellow");
                                rect(x * side, y * side, side, side)
                        } else if (obj == 3) {
                                fill("red");
                                rect(x * side, y * side, side, side)
                        } else if (obj == 4) {
                                fill("aqua");
                                rect(x * side, y * side, side, side)
                        } else if (obj == 5) {
                                fill(75, 0, 130);
                                rect(x * side, y * side, side, side)
                        } else {
                                fill(175, 238, 238)
                        }


                }
        }
}

setInterval(
        function(){
                socket.on('send matrix',sarqel)
        },1000
)
