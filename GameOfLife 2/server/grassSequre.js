let LivingCreature = require('./LivingCreature')


module.exports = class GrassSequre extends LivingCreature{
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
  

   chooseCell(char, char2,) {
    this.getNewCordinates();
       return super.chooseCell(char,char2);

   }

   mul() {
       let emptyCell = this.chooseCell(0)
       let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

       if (newCell) {
           let newX = newCell[0]
           let newY = newCell[1]

           matrix[newY][newX] == 4

           let grasseq = new GrassSequre(newX, newY)

           grassSequreArr.push(grasseq )


       }
   }

   eat() {
       let emptyCell = this.chooseCell(2,3)
       let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
       if (newCell) {
           this.energy ++
           let newX = newCell[0]
           let newY = newCell[1]

           for (let i in  allEatArr) {
               if (newX ==  allEatArr[i].x && newY ==  allEatArr[i].y) {
                allEatArr.splice(i, 1)
               }
           }
           for (let i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
               grassEaterArr.splice(i, 1)
            }
        }

           matrix[newY][newX] = 4
           matrix[this.y][this.x] = 0


           this.x = newX
           this.y = newY

           if (this.energy > 15) {
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
        
           let newX = newCell[0]
           let newY = newCell[1]
           

           matrix[newY][newX] = 4
           matrix[this.y][this.x] = 0

           this.x = newX
           this.y = newY

           this.energy --

           if (this.energy <= 0) {
               this.die()
           }
       }
   }


   die() {
       matrix[this.y][this.x] = 0

       for (let i in grassSequreArr) {
           if (this.x == grassSequreArr[i].x && this.y == grassSequreArr[i].y) {
               grassSequreArr.splice(i, 1)
               break
           }
       }
   }
}