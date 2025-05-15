import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [dataFromLogin, setDataFromLogin] = useState("");
  const [dataFromRegister, setDataFromRegister] = useState("");

  return (
    <>
      <div>
        <h2>Data from Login:</h2>
        <p>{dataFromLogin}</p>
        <Login onProductTypeChange={setDataFromLogin} />
      </div>

      <div>
        <h2>Data from Register:</h2>
        <p>{dataFromRegister}</p>
        <Register onProductType={setDataFromRegister} />
      </div>
    </>
  );
}

export default App;
