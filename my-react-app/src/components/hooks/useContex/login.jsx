import { useContext } from "react";
import { GlobalContext } from "./globalState";

function Login() {
  const { theme } = useContext(GlobalContext);

  

  return (
    <div >
      <h1>Login</h1>
      <button style={theme=="dark"?{backgroundColor: "black", color: "white"}:{backgroundColor: "white", color: "black"}}>Login</button>
    </div>
  );
}

export default Login;
