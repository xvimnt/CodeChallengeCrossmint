const PolyanetConnection = require('./PolyanetConnection');
const SoloonConnection = require('./SoloonConnection');
const ComethConnection = require('./ComethConnection');

class ConnectionFactory {

  /*
  This will return an object that prints spacial objects in our table
  */
  create(type) {
    switch(type) {
      case 'polyanet':
        return new PolyanetConnection()
      case 'soloon':
        return new SoloonConnection()
      case 'cometh':
        return new ComethConnection()
      default:
        throw 'Invalid option!';
    }
  }
  
}

module.exports = ConnectionFactory;