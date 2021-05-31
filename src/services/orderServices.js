import db from "../firebase/index";


export default function orderService (carrito, buyer, totalPrice) {


    console.log(buyer)
    console.log(carrito) 
    console.log(totalPrice)   
   
        return db.collection("orders").add({
        buyer:{name: buyer.name, email: buyer.email, phone: buyer.phone, adress: buyer.adress},
        items:carrito, 
        total:totalPrice,
       

        }).then(function(docRef) {
            console.log(docRef.id);
            return docRef.id
            

        })
        
        
    }