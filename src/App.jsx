import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useOnline } from "./hooks/useOnline";

function App() {
  const [count, setCount] = useState(0);
  const isOnline = useOnline();
  return (
    <>
      <div>
        {/* <span className="text-3xl text-red-400">hi there</span> */}
        <p>{isOnline ? "✅ Online" : "❌ Offline"}</p>
      </div>
    </>
  );
}

export default App;
