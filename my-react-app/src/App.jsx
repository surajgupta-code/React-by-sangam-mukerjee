import './App.css'
import Accordian from './components'
import { useState } from 'react';
import React from 'react';
import RandomColor from './components/randomColor';
import Hooks from './components/hooks/useState';
import Practice from './components/hooks/practice'; 
import UseEffectHook from './components/hooks/useEffect';
import Login from './components/hooks/useContex/login';
import Register from './components/hooks/useContex/register';
import ContextHook from './components/hooks/useContex/usecontext';
import UseMemoHook from './components/hooks/useMemo/useMemo';
function App() {
 const [data, setData] = useState("");
  return (
    <div className="App">
        {/* <Accordian/>
        <RandomColor/>  
        <Practice/>
        <UseEffectHook/> */}
        {/* <UseEffectHook/> */}
        <ContextHook/>
        <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
        <Login/>
        <Register/>
        </div>
        <UseMemoHook/>
    </div>
  )
}

export default App
