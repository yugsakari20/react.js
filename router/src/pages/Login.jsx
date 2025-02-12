import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      alert("Login successful!");
      localStorage.setItem("loggedIn", true);
      navigate("/home"); // Redirect to Home
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInput}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInput}
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
