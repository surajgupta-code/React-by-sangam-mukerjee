import './App.css'
import Accordian from './components'
import { useState } from 'react';
import React from 'react';
import RandomColor from './components/randomColor';
import Hooks from './components/hooks/useState';
import Practice from './components/hooks/practice'; 
import UseEffectHook from './components/hooks/useEffect';
function App() {
 const [data, setData] = useState("");
  return (
    <div className="App">
        {/* <Accordian/>
        <RandomColor/>  
        <Practice/>
        <UseEffectHook/> */}
        
    </div>
  )
}

export default App
