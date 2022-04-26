const ConnectionFactory = require('./ConnectionFactory');
const axios = require('axios')

/*
We will use the factory pattern and S.O.L.I.D principles
to create the connections that will make our space objects
*/
let connectionFactory = new ConnectionFactory()
let polyanetConnection = connectionFactory.create('polyanet')
let soloonConnection = connectionFactory.create('soloon')
let comethConnection = connectionFactory.create('cometh')

const responses = [];

/*
Obtaining our goal from the API and then parsing into requests
*/
axios.get(polyanetConnection.url + `map/${polyanetConnection.id}/goal`)
.then(res => {
  let y_pointer = 0;
  res.data.goal.forEach(row => {
    let x_pointer = 0;
    row.forEach(element => {
      // console.log(`doing ${element} on ${x_pointer},${y_pointer}`)
        switch(element){
          case "SPACE":
            responses.push(polyanetConnection.delete(x_pointer, y_pointer))
            break;
          case "POLYANET":
            responses.push(polyanetConnection.drawPoint(x_pointer, y_pointer))
            break;
          case "LEFT_COMETH":
            responses.push(comethConnection.drawPoint(x_pointer, y_pointer, 'left'))
            break;
          case "RIGHT_COMETH":
            responses.push(comethConnection.drawPoint(x_pointer, y_pointer, 'right'))
            break;
          case "UP_COMETH":
            responses.push(comethConnection.drawPoint(x_pointer, y_pointer, 'up'))
            break;
          case "DOWN_COMETH":
            responses.push(comethConnection.drawPoint(x_pointer, y_pointer, 'down'))
            break;
          case "RED_SOLOON":
            responses.push(soloonConnection.drawPoint(x_pointer, y_pointer, 'red'))
            break;
          case "BLUE_SOLOON":
            responses.push(soloonConnection.drawPoint(x_pointer, y_pointer, 'blue'))
            break;
          case "WHITE_SOLOON":
            responses.push(soloonConnection.drawPoint(x_pointer, y_pointer, 'white'))
            break;
          case "PURPLE_SOLOON":
            responses.push(soloonConnection.drawPoint(x_pointer, y_pointer, 'purple'))
            break;
          default:
            console.log("WTFFFFF: " + element)
            break;
        }
      x_pointer++;
      
    })
    y_pointer++;
  });
})
