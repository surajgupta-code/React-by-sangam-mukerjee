import './App.css'
import Accordian from './components'
import { useState } from 'react';
import React from 'react';
function App() {
 const [data, setData] = useState("");
 
  return (
    <div className="App">
        <Accordian/>    
    </div>
  )
}

export default App
