import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';





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
            
      </div>
    </BrowserRouter> 
  );
}

export default App;
