let LivingCreature = require("./livingCreature");


module.exports = class Storm extends LivingCreature {
    constructor(x, y) {
        super(x, y)

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char2, char3, char4, char5) {
        this.getNewCordinates();
        return super.chooseCell(char, char2, char3, char4, char5);
    }

    eat() {
        this.energy--
        let emptyCell = this.chooseCell(1, 2, 3, 4, 5);
        if (emptyCell.length > 0) {
            let newX = newCell[0]
            let newY = newCell[1]
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i in allEatArr) {
                if (newX == allEatArr[i].x && newY == allEatArr[i].y) {
                    allEatArr.splice(i, 1)
                }
            }
            for (let i in grassSequreArr) {
                if (newX == grassSequreArr[i].x && newY == grassSequreArr[i].y) {
                    grassSequreArr.splice(i, 1)
                }



                // if ( eat()) {
                //     this.die()
            }
            for (let i in virusArr) {
                if (newX == virusArr[i].x && newY == virusArr[i.y])
                    virusArr.splice(i, 1)
            }
            matrix[newY][newX] = 0
            matrix[this.y][this.x] = 0

        }
    }
}
    