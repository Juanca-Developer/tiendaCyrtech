function getItemsById(idItems) {
    return new Promise((resolve, reject) => {
      fetch(`items.json${idItems}`)
      console.log(idItems)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  module.exports = {
    
    getItemsById,
    
  }
  