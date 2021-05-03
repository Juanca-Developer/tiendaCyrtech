import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer'
import HomePage from './container/Pages/homepage/Homepage'
import PageEmpresa from './container/Pages/empresapage/PageEmpresa'
import PageServicios from './container/Pages/serviciospage/PageServicios'
import {CardContext} from './context/CardContext'

function App() {
  return (
    <div className="App">
    <CardContext.Provider value ={[]}>  
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
         <Route exact path="/categorias/:categoryId">
          
            <ItemCategoryContainer /> 
          
        </Route>
          <Route exact path="/productos">  
      
          <ItemListContainer greeting = "Soluciones reales a problemas digitales"/>
          
          </Route>
          <Route exact path="/productos/:itemsId">
          <ItemDetailContainer/>
          </Route>
      
      </Switch>
      
    </Router> 
    </CardContext.Provider> 
    </div>
  );
}

export default App;
