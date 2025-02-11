import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

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
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
