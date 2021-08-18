import React from 'react';
import Home from './components/Home.js';
import Login from './components/Login';
import Register from './components/Register';
import Aboutus from './components/Aboutus';
import Route from './Route';
import Header from "./components/Header";

const App = () => {
  
  
  
  return (
  <div>
    <Header />
    <Route path="/"><Home /></Route>
    <Route path="/Aboutus"><Aboutus /></Route>
    <Route path="/Register"><Register /></Route>
    <Route path="/Login"><Login /></Route>
  </div>
  );
}


export default App