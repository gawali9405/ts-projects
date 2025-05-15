import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState("");

  const handleRegChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegReset = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleRegSubmit = () => {
    setShow(JSON.stringify(data));
  };

  return (
    <>
      <div>
        <h2>Register From</h2>
        <p>Name : {data.name}</p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleRegChange} />
        <br />
        <p>Email : {data.email}</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleRegChange} />
        <br />
        <p>Password : {data.password}</p>
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleRegChange} />
        <br />
        <p>confirmPassword : {data.confirmPassword}</p>
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleRegChange}
        />
        <br />
        <p>{show}</p>
        <button onClick={handleRegReset}>Reset</button>
        <button onClick={handleRegSubmit}>Register</button>
      </div>
    </>
  );
}

export default Register;
