import React from 'react';
import RowPost from './Components/RowPost/RowPost';
import "./App.css"
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {originals,actions,drama,comedy, horror} from "./urls"
function App() {
 
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost  url={originals} title="Netflix originals"/>
     <RowPost istext url={actions} title="Action" isSmall/>
     <RowPost istext url={drama} title="Drama" isSmall/>
     <RowPost istext url={comedy} title="Comedy" isSmall/>
     <RowPost url={horror} title="Horror" isSmall/>
    </div>
);
}

export default App;