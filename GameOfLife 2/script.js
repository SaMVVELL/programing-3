function matrixGenerator(matrixSize, grass, grassEater, allEater, grassSequre, virus,) {
        var matrix = []

        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }


        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }


        for (let i = 0; i < allEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }

        for (let i = 0; i < grassSequre; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)



                matrix[y][x] = 4

        }

        for (let i = 0; i < virus; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)

                matrix[y][x] = 5

        }
        return matrix
}

let matrix = matrixGenerator(30, 17, 10, 10, 15, 5)
let side = 20

var grassArr = []
var grassEaterArr = []
var allEatArr = []
var grassSequreArr = []
var virusArr = []
function setup() {
        frameRate(5)
        createCanvas(matrix[0].length * side, matrix.length * side)
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
}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                        } else if (matrix[y][x] == 4) {
                                fill("aqua")
                        } else if (matrix[y][x] == 5) {
                                fill(75, 0, 130)
                        } else {
                                fill(175, 238, 238)
                        }

                        rect(x * side, y * side, side, side)
                }
        }
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



}


// let student ={
//         name:"Poghos",
//         age:33,
//         isTumoStudent:true,

//         showInfo(){
//                 console.log(this.name,this.age);
//         }
// }
// student.showInfo()


// let erexa = new Child("Artur",18,"male");
// erexa.jump()
// erexa.speak()
// erexa.walk()
// console.log(erexa.name,erexa.gen);