import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import HomePage from './container/Pages/homepage/Homepage'
import PageEmpresa from './container/Pages/empresapage/PageEmpresa'
import PageServicios from './container/Pages/serviciospage/PageServicios'


function App() {
  return (
    <div className="App">
    <Router> 
    
    <NavBar/>
     
      <Switch>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route path="/empresa">
            <PageEmpresa/>
          </Route>
          <Route path="/servicios">
            <PageServicios/>
          </Route>
          <Route path="/productos">  
      
          <ItemListContainer greeting = "Soluciones reales a problemas digitales"/>
            
          
          
          </Route>
          <Route path="/productos/:itemsId">
          <ItemDetailContainer itemId ={5}/>
          </Route>
      
      </Switch>
      
    </Router> 
    </div>
  );
}

export default App;
