import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("All fields are required!");
      return;
    }

    console.log(user);
    

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Now login.");
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInput}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
