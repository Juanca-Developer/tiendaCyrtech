import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
      
      <header >
         <NavBar/> 
      </header>
      <ItemListContainer greeting = "Soluciones reales a problemas digitales"/>
            
      </div>
  );
}

export default App;
