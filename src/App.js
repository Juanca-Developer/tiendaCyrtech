import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';







function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Switch>
        <Route>
          
        </Route>
      </Switch>
      <header >
         <NavBar/> 
      </header>
      <ItemListContainer greeting = "Soluciones reales a problemas digitales"/>
      <ItemDetailContainer itemId ={5}/>  
        
      </div>
    </BrowserRouter> 
  );
}

export default App;
