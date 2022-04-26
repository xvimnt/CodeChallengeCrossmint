const axios = require('axios')

class Connection {
  
  id = 'efa1eac5-b4ae-4f68-83a6-60072ed99a74'
  url = "https://challenge.crossmint.io/api/"

  constructor(option) {
    this.option = option;
  }

  post = async (data, option) => {
    return await axios
    .post(this.url + option, data)
  }

  clear = async () => {
    const responses = [];
    for(let x = 25; x < 30; x++) {
      for(let y = 25; y < 30; y++) {
          responses.push(
            await axios.delete(
              this.url + this.option, { data: { "candidateId":this.id, "row": x, "column":y }}
            )
          );
      }  
    }
  }

  delete = async (x, y, option) => {
    return await axios.delete (
              this.url + this.option, { data: { "candidateId":this.id, "row": x, "column":y }}
            )
  }
  
}

module.exports = Connection;