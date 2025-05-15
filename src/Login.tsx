import { useState } from "react";

function Login({ onProductTypeChange }: {onProductTypeChange?: (newType: string) => void}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleLogin = () => {
    const loginData = { userName, password };
    const result = JSON.stringify(loginData);
    setOutput(result);
    onProductTypeChange?.(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleReset = () => {
    setUserName("");
    setPassword("");
    setOutput("");
    onProductTypeChange?.("");
  };

  return (
    <div>
      <h2>Login Form</h2>

      <label>UserName:{userName} </label><br/>
      <input
        type="text"
        name="userName"
        placeholder="Enter your username"
        value={userName}
        onChange={handleChange}
      />
      <br />

      <label>Password:{password} </label><br/>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <br />

      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLogin}>Login</button>

      <p>{output}</p>
    </div>
  );
}

export default Login;
