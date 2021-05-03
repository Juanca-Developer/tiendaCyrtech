function getItemsById(itemsId) {
    return new Promise((resolve, reject) => {
      fetch(`https://raw.githubusercontent.com/Juanca-Developer/tiendaCyrtech/master/public/items.json/${itemsId}`)
      
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        
    })
  }
  module.exports = {
    
    getItemsById,
    
  }

  