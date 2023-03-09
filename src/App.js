import React from 'react';
import RowPost from './Components/RowPost/RowPost';
import "./App.css"
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {originals,actions} from "./urls"
function App() {
 
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netflix originals"/>
     <RowPost url={actions} title="Action" isSmall/>
    </div>
  );
}

export default App;