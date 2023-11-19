let socket = io();


let side = 20

function setup() {
        frameRate(15)
        createCanvas(30 * side, 30 * side)
}


let i = 0;

function sarqel(matrix) {

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                fill("green");
                                console.log("aaaaaa====>>>>",matrix);

                        } else if (obj == 2) {
                                fill("yellow");
                        } else if (obj == 3) {
                                fill("red");
                        } else if (obj == 4) {
                                fill("aqua");
                        } else if (obj == 5) {
                                fill(75, 0, 130);
                        } else {
                                fill(175, 238, 238)

                        }

                        rect(x * side, y * side, side, side)

                }
        }
}

setInterval(
        function(){
                socket.on('send matrix',sarqel)
        },1000
)
