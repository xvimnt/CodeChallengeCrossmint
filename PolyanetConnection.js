const Connection = require('./Connection');

class PolyanetConnection extends Connection {
  
  constructor() {
    super("polyanets");
  }

  drawPoint(x,y) {
    console.log(`Drawing ${this.option} in point ${x},${y}`)
    let data = { "candidateId":this.id, "row": x, "column":y }
    this.post(data,this.option);
  }
  
  drawLine(x_init, y_init, x_end, y_end) {
    console.log(`Drawing a line of ${this.option} 
                  from ${x_init},${y_init} to ${x},${y}`);
    for(x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(y_pointer = y_init; y_pointer <= y_end; y_pointer++) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer }
        this.post(data,this.option);
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

  #drawDiagonalDown(x_init, y_init, x_end, y_end) {
    for(let x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(let y_pointer = y_init; y_pointer <= y_end; y_pointer++) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer }
        console.log(`Updating ${x_pointer},${y_pointer}!`)
        this.post(data,this.option)
        x_pointer++
      }
    }
  }
  
  #drawDiagonalUp(x_init, y_init, x_end, y_end) {
    for(let x_pointer = x_init; x_pointer <= x_end; x_pointer++) {
      for(let y_pointer = y_init; y_pointer >= y_end; y_pointer--) {
        let data = { "candidateId":this.id, "row": x_pointer, "column":y_pointer }
        console.log(`Updating ${x_pointer},${y_pointer}!`)
        this.post(data,this.option)
        x_pointer++
      }
    }
  }
  
}

module.exports = PolyanetConnection;