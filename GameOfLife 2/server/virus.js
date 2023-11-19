let LivingCreature = require('./LivingCreature')

module.exports = class VirusCl extends LivingCreature {
   constructor(x, y) {
     super(x,y)
      this.energy = 10
     
   }


   getNewCordinates(){
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



   chooseCell(char, char2, char3, char4) {
      this.getNewCordinates();
      return super.chooseCell(char, char2, char3, char4);
   }

   mul(){
      let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] == 5

            let vir = new VirusCl(newX, newY)
            virusArr.push(vir)

           
        }
   }
   eat() {
      let emptyCell = this.chooseCell(1, 2, 3, 4)
      let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
      if (newCell) {
         this.energy += 5
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
         for (let i in grassSequreArr ) {
            if (newX == grassSequreArr[i].x && newY ==grassSequreArr[i].y) {
               grassSequreArr.splice(i, 1)
            }
         }
         matrix[newY][newX] = 0
         matrix[this.y][this.x] = 0
         
         if (this.energy >= 15) {
            this.mul()
        }

      } else {
         this.move()
      }
   }

   move() {
      let emptyCell = this.chooseCell(0)
      let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
      if (newCell) {
         this.energy -= 2
         let newX = newCell[0]
         let newY = newCell[1]
         matrix[newY][newX] = 5
         matrix[this.y][this.x] = 0
         this.x = newX
         this.y = newY

         if (this.energy < 0) {
            this.die()
        }
      }
 
    }
    
        die(){
            matrix[this.y][this.x] = 0
    
              for(let i in  virusArr){
                       if(this.x == virusArr[i].x && this.y ==  virusArr[i].y) {
                        virusArr.splice(i,1)
                       
                       }
                    }
    
 
 }
}