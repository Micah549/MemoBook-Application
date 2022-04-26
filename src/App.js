// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Routing from './routes/Routing';
import { Lines } from 'react-preloaders';
import Navbar from './routes/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="App">
      {/* <Lines color={'#f7f7f7'} />;
<Lines time= {1800} color={'rgb(158, 38, 102)'} />; */}
    <Routing/>
    <Footer/>
    </div>
  );
}

export default App;
