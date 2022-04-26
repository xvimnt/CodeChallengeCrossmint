const Connection = require('./Connection');

class ComethConnection extends Connection {
  
  constructor() {
    super("comeths");
  }

  /*
  This is going to draw a cometh
  */
  drawPoint = async (x,y, direction) => {
    let data = { "candidateId":this.id, "row": x, "column":y, "direction":direction }
    return await this.post(data,this.option);
  }
  
}

module.exports = ComethConnection;