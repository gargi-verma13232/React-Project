import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", height: "50vh" }} >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;