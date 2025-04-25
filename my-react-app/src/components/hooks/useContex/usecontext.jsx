import { useContext } from "react";
import { GlobalContext } from "./globalState";

function ContextHook() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div >
      <h1>useContext</h1>
      <button onClick={()=> setTheme(theme ==="light"?"dark":"light")}>Change Theme</button>
    </div>
  );
}

export default ContextHook;
