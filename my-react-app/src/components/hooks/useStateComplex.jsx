import { useState } from "react";
const initialState = {
    name: '',
    city:''
};


function Hooks2() {
  const [formData, setFormData] = useState(initialState);
  return(
    <div>
        <h1>useState</h1>
        <div>
           <input type="text"  />
        </div>
    </div>
  )

}

 export default Hooks2;