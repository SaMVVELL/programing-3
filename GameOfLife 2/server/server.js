let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");




app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(matrixSize, grass, grassEater, allEater, grassSequre, virus) {
    matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }


    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1

        }
    }

    for (let i = 0; i < grassEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2

        }
    }


    for (let i = 0; i < allEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3

        }
    }

    for (let i = 0; i < grassSequre; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4

        }


    }

    for (let i = 0; i < virus; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5

        }


    }
    return matrix
}

matrix = matrixGenerator(30, 17, 10, 10, 15, 5)




io.sockets.emit('send matrix', matrix)


grassArr = [];
grassEaterArr = [];
allEatArr = [];
grassSequreArr = [];
virusArr = [];
stormArr = [];

Grass = require("./grass")
GrassEater = require("./grassEater")
AllEater = require("./allEater")
GrassSequre = require("./grassSequre")
Virus = require("./virus")
Storm = require("./storm")




function create0bject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let alleat = new AllEater(x, y)
                allEatArr.push(alleat)
            } else if (matrix[y][x] == 4) {
                let grseq = new GrassSequre(x, y)
                grassSequreArr.push(grseq)
            } else if (matrix[y][x] == 5) {
                let vir = new Virus(x, y)
                virusArr.push(vir)
            } else if (matrix[y][x] == 6) {
                let storm = new Storm(x, y)
                stormArr.push(storm)
            }
        }
    }

    io.sockets.emit('send matrix', matrix)
}
function garun(){
    for (let i in grassArr) {
        grassArr[i].multiple = 3
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].energy = 4
    }
    for (let i in allEatArr) {
        allEatArr[i].energy = 6
    }
    for (let i in grassSequreArr) {
        grassSequreArr[i].energy = 5
    }
    for (let i in virusArr) {
        virusArr[i].energy = 7
    }
}
 
    function amar(){
        for (let i in grassArr) {
            grassArr[i].multiple = 6
        }
        for (let i in grassEaterArr) {
            grassEaterArr[i].energy = 8
        }
        for (let i in allEatArr) {
            allEatArr[i].energy = 12
        }
        for (let i in grassSequreArr) {
            grassSequreArr[i].energy = 10
        }
        for (let i in virusArr) {
            virusArr[i].energy = 14
        }
    }

function ashun(){
    for (let i in grassArr) {
        grassArr[i].multiple = 4
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].energy = 5
    }
    for (let i in allEatArr) {
        allEatArr[i].energy = 4
    }
    for (let i in grassSequreArr) {
        grassSequreArr[i].energy = 3
    }
    for (let i in virusArr) {
        virusArr[i].energy = 3
    }
}


function dzmer(){
    for (let i in grassArr) {
        grassArr[i].multiple = -3
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].energy = -1
    }
    for (let i in allEatArr) {
        allEatArr[i].energy = 3
    }
    for (let i in grassSequreArr) {
        grassSequreArr[i].energy = 2
    }
    for (let i in virusArr) {
        virusArr[i].energy = 4
    }

    io.sockets.emit('send matrix', matrix)
}


function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in allEatArr) {
        allEatArr[i].eat()
    }
    for (let i in grassSequreArr) {
        grassSequreArr[i].eat()
    }

    for (let i in virusArr) {
        virusArr[i].eat()
    }
    for (let i in stormArr){
      stormArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix)
}

function createStorm() {
    console.log("Create storm !!!");
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
                let X = Math.floor(Math.random() * matrix[y].length)
                let Y = Math.floor(Math.random() * matrix.length )
                if(matrix[Y][X] == 0){
                    matrix[Y][X] = 6
                    io.sockets.emit('send matrix', matrix)
                }
            
        }

    }
}

setInterval(game, 1000)

io.on('connection', function (socket) {
    create0bject(matrix)
    socket.on("shtorm", createStorm)
    socket.on("gr" , garun)
    socket.on("am" , amar)
    socket.on("ash" , ashun)
    socket.on("dz", dzmer)
})






var statistics = {

}


setInterval(function () {

    fs.writeFile("statistics.js", JSON.stringify(statistics), () => {
        statistics.grass = grassArr.length
        statistics.grassEater = grassEaterArr.length
        statistics.allEater = allEatArr.length
        statistics.grassSequre = grassSequreArr.length
        statistics.virus = virusArr.length
        
    })
}, 1000)