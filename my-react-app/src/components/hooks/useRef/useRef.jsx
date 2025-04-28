import { useEffect, useRef } from "react";
function UseRefHook(){
    const constValue= useRef(0);

    function handleClick(){
        constValue.current++
        console.log(constValue.current);
    }

    useEffect(()=>{
         
    })

    return(
        <div>
            <h1>Use Ref Hook</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )

}