import { useContext } from "react";
import { GlobalContext } from "./globalState";

function Register() {
  const { theme } = useContext(GlobalContext);

  return (
    <div >
      <h1>Register</h1>
      <button style={theme=="dark"?{backgroundColor: "black", color: "white"}:{backgroundColor: "white", color: "black"}}>Register</button>
    </div>
  );
}

export default Register;
