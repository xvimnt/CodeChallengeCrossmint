const axios = require('axios')

class Connection {
  
  id = 'efa1eac5-b4ae-4f68-83a6-60072ed99a74'
  url = "https://challenge.crossmint.io/api/"

  constructor(option) {
    this.option = option;
  }
  
  /*
    Method that prints polyanets, soloons and comeths
  */
  post = async (data, option) => {
    // await to reduce the traffic to the api
    await new Promise(resolve => setTimeout(resolve, 500 * (data.row + data.column)));
    return await axios
    .post(this.url + option, data).catch(err => {
      console.log(`an error was ocurred in the post method ${data.row},${data.column}`)
    }).then(res => {
      console.log(`The field ${data.row},${data.column} was updated correclty`)
    })
  }

  /*
    Method to reset the whole table (fill it with blank spaces)
  */
  clear = async () => {
    const responses = [];
    for(let row = 0; row < 30; row++) {
      for(let column = 0; column <= 30; column++) {
          // await to reduce the traffic to the api
          await new Promise(resolve => setTimeout(resolve, 10 * (row + column)));
          responses.push( 
            await axios.delete(
              this.url + this.option, { data: { "candidateId":this.id, "row": row, "column":column }}
            ).catch(err => {
              console.log(`an error was ocurred in the delete method ${row},${column}`)
            }).then(res => {
              console.log(`The field ${row},${column} was deleted correclty`)
            })
          );
      }  
    }
  }

  /*
    Method that prints a blank space in a cell
  */
  delete = async (row, column, option) => {
    // await to reduce the traffic to the api
    await new Promise(resolve => setTimeout(resolve, 850 * (row * column)));
    return await axios.delete (
              this.url + this.option, { data: { "candidateId":this.id, "row": row, "column":column }}
            ).catch(err => {
      console.log(`an error was ocurred in the delete method ${row},${column}`)
    }).then(res => {
      console.log(`The field ${row},${column} was deleted correclty`)
    })
  }
  
}

module.exports = Connection;