import { useState, useEffect } from "react";

function UseEffectHook(){
    const [count, setCount]= useState(0);
    const [show, setShow]= useState(false);
    useEffect(()=>{ 
      if(count >= 5) {
        setShow(true);
      }
       },[count])
    return(
        <div>
            <h1>UseEffect</h1>
            <p>Count is {count}</p>
            {
                show && <p>Count is going above {show}</p>
            }
            <button onClick={()=>setCount(count+1) }>CLICK</button>
        </div>
    )
}
export default UseEffectHook;