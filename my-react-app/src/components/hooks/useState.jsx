import React from 'react';
import { useState } from 'react';
const initialState = false
function Hooks(){

  const [ToggleText, setToggleText] = useState(initialState); 
  function handleToggleText(){
    setToggleText(!ToggleText);
  }
    return(
        <div>
            <div className="app">
                <h1>useState</h1>
                <div>
                  {ToggleText ?<p >Hello World</p>:null}  
                    <button onClick={handleToggleText}>Toggle Text</button>
                </div>
            </div>
        </div>
    )
}

export default Hooks;