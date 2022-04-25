const axios = require('axios')

class Connection {
  
  id = 'efa1eac5-b4ae-4f68-83a6-60072ed99a74'
  url = "https://challenge.crossmint.io/api/"

  constructor(option) {
    this.option = option;
  }

  post(data, option) {
    axios
    .post(this.url + option, data)
    .then(res => {
      // console.log(`Updated successfully ${JSON.stringify(data)}!`)
    })
    .catch(error => {
      console.error(error)
    })
  }

  
  delete(data, option) {
    axios
    .delete(this.url + option, data)
    .then(res => {
      // console.log(`Deleted successfully ${JSON.stringify(data)}!`)
    })
    .catch(error => {
      console.error(error)
    })
  }
}

module.exports = Connection;