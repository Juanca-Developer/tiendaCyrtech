import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer'
import HomePage from './container/Pages/homepage/Homepage'
import PageServicios from './container/Pages/serviciospage/PageServicios'
import ContactPage from './container/Pages/contactpage/ContactPage'
import ContextProvider from './context/CardContext'
import FormBuy from './components/FormBuy'

function App() {

  return (
    
    <ContextProvider>  
       <Router> 
    
        <NavBar/>
     
        <Switch>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          
          <Route path="/servicios">
            <PageServicios/>
          </Route>
          <Route path="/contacto">
            <ContactPage/>
          </Route>
         <Route exact path="/categorias/:categoryId">
          
            <ItemListContainer /> 
          
        </Route>
          <Route exact path="/productos">  
      
          <ItemListContainer greeting = "Los mejores productos y las mejores marcas"/>
          
          </Route>
          <Route exact path="/carrito/:compra">
          
            <FormBuy /> 
          
        </Route>
          <Route exact path="/productos/:itemsId">
          <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <CartContainer/>
          </Route>
         </Switch>
      
        </Router> 
    </ContextProvider> 
    
  );
}

export default App;
