const Connection = require('./Connection');

class ComethConnection extends Connection {
  
  constructor() {
    super("comeths");
  }

  drawPoint = async (x,y, direction) => {
    let data = { "candidateId":this.id, "row": x, "column":y, "direction":direction }
    return await this.post(data,this.option);
  }
  
  drawLine(x_init, y_init, x_end, y_end, direction) {
    console.log(`Drawing a line of ${this.option} 
                  from ${x_init},${y_init} to ${x},${y}`);
    for(x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(y_pointer = y_init; y_pointer <= y_end; y_pointer++) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer, "direction":direction }
        this.post(data,this.option);
      }
    }
  }

  drawDiagonal(x_init, y_init, x_end, y_end, direction) {
    console.log(`Drawing a diagonal of ${this.option} 
                  from ${x_init},${y_init} to ${x_end},${y_end}`);
    if(y_init > y_end) {
      this.#drawDiagonalUp(x_init, y_init, x_end, y_end, direction)
    } else {
      this.#drawDiagonalDown(x_init, y_init, x_end, y_end, direction)
    }
  }

  #drawDiagonalDown(x_init, y_init, x_end, y_end, direction) {
    for(let x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(let y_pointer = y_init; y_pointer <= y_end; y_pointer++) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer, "direction":direction }
        // console.log(`Updating ${x_pointer},${y_pointer}!`)
        this.post(data,this.option)
        x_pointer++
      }
    }
  }
  
  #drawDiagonalUp(x_init, y_init, x_end, y_end, direction) {
    for(let x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(let y_pointer = y_init; y_pointer >= y_end; y_pointer--) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer, "direction":direction }
        // console.log(`Updating ${x_pointer},${y_pointer}!`)
        this.post(data,this.option)
        x_pointer++
      }
    }
  }
  
}

module.exports = ComethConnection;