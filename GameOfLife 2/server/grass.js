let LivingCreature = require('./LivingCreature')



module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);

    }


    mul() {
        this.multiply += 7
        let emptyCells = this.chooseCell(0)
        let newCell = [Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.multiply >= 15) {
            let newX = newCell[0]
            let newY = newCell[1]
           matrix[this.y][this.x] == 1

           let gr = new Grass(newX, newY)
            grassArr.push(gr)
 
            this.multiply = 0
        }
    }




}