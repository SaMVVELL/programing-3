let LivingCreature = require('./LivingCreature')

module.exports = class VirusCl {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.energy = 10
      this.directions = [];
   }


  



   chooseCell(char, char2, char3, char4) {
      this.getNewCoordinates()
      let found = []


      for (let i in this.directions) {
         let x = this.directions[i][0]
         let y = this.directions[i][1]
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char2) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char3) {
               found.push(this.directions[i])
            }
         }
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char4) {
               found.push(this.directions[i])
            }
         }
      }

      return found
   }

   mul(){
      let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 5

            let vir = new VirusCl(newX, newY)
            VirusArr.push(vir)

           
        }
   }
   eat() {
      let emptyCell = this.chooseCell(1, 2, 3, 4)
      let newCell = random(emptyCell)

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
      let newCell = random(emptyCell)
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
    
              for(let i in  VirusArr){
                       if(this.x == VirusArr[i].x && this.y ==  VirusArr[i].y) {
                        VirusArr.splice(i,1)
                       
                       }
                    }
    
 
 }
}