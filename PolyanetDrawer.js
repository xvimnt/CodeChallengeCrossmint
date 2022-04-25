const Connection = require('./Connection');

class PolyanetDrawer extends Connection {
  option = "polyanet";
  
  constructor() {
    super();
  }

  drawPoint(x,y) {
    console.log(`Drawing a ${this.option} in point ${x},${y}`)
    this.post(x,y,this.option);
  }
  
  drawLine(x_init, y_init, x_end, y_end) {
    console.log(`Drawing a line of ${this.option} 
                  from ${x_init},${y_init} to ${x},${y}`);
    for(x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(y_pointer = y_init; y_pointer <= y_end; y_pointer++) {
        this.post(x_pointer,y_pointer,this.option);
      }
    }
  }

  drawDiagonal(x_init, y_init, x_end, y_end) {
    console.log(`Drawing a diagonal of ${this.option} 
                  from ${x_init},${y_init} to ${x_end},${y_end}`);
    if(y_init > y_end) {
      this.#drawDiagonalUp(x_init, y_init, x_end, y_end)
    } else {
      this.#drawDiagonalDown(x_init, y_init, x_end, y_end)
    }
  }
  
}

module.exports = PolyanetDrawer;