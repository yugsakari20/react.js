import React, { useState } from "react";
import API from "../config/Api";

const Form = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/student", student);
      setStudent({ name: "", age: "", course: "" }); 
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleInput}
        placeholder="Enter Name"
        required
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleInput}
        placeholder="Enter Age"
        required
      />
      <input
        type="text"
        name="course"
        value={student.course}
        onChange={handleInput}
        placeholder="Enter Course"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default Form;
