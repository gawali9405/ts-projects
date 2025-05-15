import { useState } from "react";

type Props = {
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};

function Login({ productTypeValue, onProductTypeChange }: Props) {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const [show, setShow] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    setShow(JSON.stringify(data));
    if (onProductTypeChange) { 
      onProductTypeChange(JSON.stringify(data));
    }
  };

  const handleReset = () => {
    setData({
      userName: "",
      password: "",
    });
    setShow("");
    if (onProductTypeChange) {
      onProductTypeChange("");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <p>UserName : {data.userName}</p> <br />
      <label htmlFor="userName">UserName </label>
      <input
        type="text"
        placeholder="Enter your username"
        name="userName"
        value={data.userName}
        onChange={handleChange}
      />
      <br />
      <p>Password : {data.password}</p>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLogin}>Login</button>
      <p>{show}</p>
    </div>
  );
}

export default Login;
