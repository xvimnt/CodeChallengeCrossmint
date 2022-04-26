const Connection = require('./Connection');

class SoloonConnection extends Connection {
  
  constructor() {
    super("soloons");
  }

  /*
  This is going to draw a soloon
  */
  drawPoint = async (x,y, color) => {
    let data = { "candidateId":this.id, "row": x, "column":y, "color":color }
    return await this.post(data,this.option);
  }
  
}

module.exports = SoloonConnection;