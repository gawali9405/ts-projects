import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sandip");

  const handleAddChange = () => {
    if (count === 100) {
      alert("The value cannot go beyond 100");
      return;
    }
    setCount((count) => count + 20);
  };

  const handleRemoveChange = () => {
    if (count === 0) {
      alert("The value cannot go below 0");
      return;
    }
    setCount((count) => count - 20);
  };

  return (
    <>
      <h1>React Counter</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleAddChange}>Add Counter</button>
        <button onClick={handleRemoveChange}>Remove Counter</button>
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
