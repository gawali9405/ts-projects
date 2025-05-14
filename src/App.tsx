import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sandip");

  const handleChange = () => {
    if (count === 100) {
      alert("The max value of count is 100");
      return;
    }
    setCount((count) => count + 10);
  };

  return (
    <>
      <h1>React Counter</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleChange}>Add Counter</button>
        <button onClick={() => setCount((count) => count - 10)}>
          Remove Counter
        </button>
      </div>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default App;
