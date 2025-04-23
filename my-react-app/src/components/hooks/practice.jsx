import { useState } from "react";
const initialState = false;
function Practice(){
  const [text, setText] = useState("initialState");
  function handleText(){
    setText(!text);
  }
  return(  <div>
        <h1>UseState</h1>
        <div>
         {text?<p>Hello World</p>: ""}
         <button onClick={handleText}>Click Here To change the text</button>
        </div>
    </div>
  )
}


export default Practice;