let socket = io();

let grCol = "green"
let grEatCol = "yellow"
let allEatCol = "red"
let grassSeqCol = "aqua"
let virCol = " 75, 0, 130"

let side = 20

function setup() {
        frameRate(60)
        createCanvas(30 * side, 30 * side)
}
var st = document.getElementById("Storm");
st.addEventListener("click", clickHandlerShtorm);

var spr = document.getElementById("Spring");
spr.addEventListener("click", clickSpring);

var summ = document.getElementById("Summer");
summ.addEventListener("click", clickSummer);

var aut = document.getElementById("Autumn");
aut.addEventListener("click", clickAutumn);

var wint = document.getElementById("Winter")
wint.addEventListener("click", clickWinter)

function clickHandlerShtorm() {
        socket.emit("shtorm")
}
function clickSpring() {
        grcol = "#B0DF47"
        grEatCol = "#C7840A"
        allEatCol = "#AF0C00"
        grassSeqCol = "#2ACAEA"
        virCol = "#9672FF"
        socket.emit("gr")
        
}
function clickSummer() {
        grcol = "#00FF00"
        grEatCol = "#FFFF44"
        allEatCol = "#FF4E4E"
        grassSeqCol = "#5DFFFF"
        virCol = "#B24AFF"
        socket.emit("am")
        
}

function clickAutumn() {
        grcol = "#A57215"
        grEatCol = "#FFBE00"
        allEatCol = "#990000"
        grassSeqCol = "#0085FD"
        virCol = "#6A329F"
        socket.emit("ash")

}
function clickWinter() {
        grCol = "#A4E887"
        grEatCol = "#FFD354"
        allEatCol = "#E06666"
        grassSeqCol = "#E06666"
        virCol = "#8E7CC3"
         socket.emit("dz")
        
}



let i = 0;

function sarqel(matrix) {

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                fill(grCol);

                        } else if (obj == 2) {
                                fill(grEatCol);
                        } else if (obj == 3) {
                                fill(allEatCol);
                        } else if (obj == 4) {
                                fill(grassSeqCol);
                        } else if (obj == 5) {
                                fill(virCol);
                        } else if (obj == 6) {
                                fill("black")
                        } else {
                                fill(175, 238, 238)
                        }
                        rect(x * side, y * side, side, side)

                }


        }
}


setInterval(
        function () {
                socket.on('send matrix', sarqel)
        }), 1000


