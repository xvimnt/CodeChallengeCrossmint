const Connection = require('./Connection');

class PolyanetConnection extends Connection {
  
  constructor() {
    super("polyanets");
  }
  
  /*
  This is going to draw a polyanet
  */
  drawPoint = async (x,y) => {
    let data = { "candidateId":this.id, "row": x, "column":y }
    return await this.post(data,this.option);
  }
  
}

module.exports = PolyanetConnection;