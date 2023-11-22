let socket = io();


let side = 20

function setup() {
        // frameRate(15)
        createCanvas(30 * side, 30 * side)
}

var clickCount = 0

function clickHandlerShtorm(evt) {
        alert("kkkkkkk")
        socket.emit("shtorm")
}
var st = document.getElementById("Storm");
st.addEventListener("click", clickHandlerShtorm);

var clickSpr = 0

function clickSpring(evt) {
        clickSpr++;
        console.log(evt);
        var str2 = "Գարուն";
        this.innerText = str2;
}

var spr = document.getElementById("Spring");
spr.addEventListener("click", clickSpring);

var clickSumm = 0
function clickSummer(evt) {
        clickSumm++;
        console.log(evt);
        var str3 = "Ամառ";
        this.innerText = str3
}

var summ = document.getElementById("Summer");
summ.addEventListener("click", clickSummer);


var clickAut = 0;

function clickAutumn(evt) {
        clickAut++;
        console.log(evt);
        var str4 = "Աշուն"
        this.innerText = str4
}

var aut = document.getElementById("Autumn");
aut.addEventListener("click", clickAutumn);

var clickWint = 0

function clickWinter(evt) {
        clickWint++;
        console.log(evt);
        var str5 = "Ձմեռ"
        this.innerText = str5;
}

var wint = document.getElementById("Winter")
wint.addEventListener("click", clickWinter)

let i = 0;

function sarqel(matrix) {

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                fill("green");

                        } else if (obj == 2) {
                                fill("yellow");
                        } else if (obj == 3) {
                                fill("red");
                        } else if (obj == 4) {
                                fill("aqua");
                        } else if (obj == 5) {
                                fill(75, 0, 130);
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
        }, 1000
)
