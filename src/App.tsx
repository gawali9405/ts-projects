import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [dataFromChild, setDataFromChild] = useState("");

  return (
    <>
      <h2>Data from Child: {dataFromChild}</h2>
      <Login
        productTypeValue={dataFromChild}
        onProductTypeChange={setDataFromChild}
      />
    </>
  );
}

export default App;
