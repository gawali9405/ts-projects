import { useState } from "react";
 
function Register({ onProductType }:{onProductType?: (newType: string) => void} ) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleRegister = () => {
    const registerData = { name, email, password, confirmPassword };
    const result = JSON.stringify(registerData);
    setOutput(result);
    onProductType?.(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setOutput("");
    onProductType?.("");
  };

  return (
    <div>
      <h2>Register Form</h2>

      <label>Name: {name}</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />

      <label>Email: {email}</label>
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <br />

      <label>Password: {password}</label>
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <br />

      <label>Confirm Password: {confirmPassword}</label>
      <br />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password"
      />
      <br />

      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRegister}>Register</button>

      <p>{output}</p>
    </div>
  );
}

export default Register;
