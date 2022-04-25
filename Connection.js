const axios = require('axios')

class Connection {
  
  id = 'efa1eac5-b4ae-4f68-83a6-60072ed99a74'
  url = "https://challenge.crossmint.io/api/"
  
  post(column, row, option) {
    let data = { "candidateId":this.id, "row": row, "column":column }
    axios
    .post(this.url + option, data)
    .then(res => {
      console.log(`Updated successfully ${row},${column}!`)
    })
    .catch(error => {
      console.error(error.msg)
    })
  }
  
}

module.exports = Connection;