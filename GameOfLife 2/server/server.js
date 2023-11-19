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
        if(matrix[y][x] ==0){
            matrix[y][x] = 1

        }
    }

    for (let i = 0; i < grassEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] ==0){
            matrix[y][x] = 2

        }
    }


    for (let i = 0; i < allEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] ==0){
            matrix[y][x] = 3

        }
    }

    for (let i = 0; i < grassSequre; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if(matrix[y][x] ==0){
            matrix[y][x] = 4

        }


    }

    for (let i = 0; i < virus; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] ==0){
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

Grass = require("./grass")
GrassEater = require("./grassEater")
AllEater = require("./allEater")
GrassSequre = require("./grassSequre")
Virus = require("./virus")


//test

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
            }
        }
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
    io.sockets.emit("send matrix", matrix)
}

setInterval(game, 1000)

io.on('connection', function() {
    create0bject(matrix)
})