class Grass extends LivingCreature {


   
    mul(){
        this.multiply += 7
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if(newCell && this.multiply >= 15){
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 1
                   let gr = new Grass(newX, newY)
                   grassArr.push(gr)

                   this.multiply = 0
         }
    }




}