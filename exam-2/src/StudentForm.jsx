import { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/student", student);
      console.log("Student added:", response.data);
      alert("Student added successfully!");
      setStudent({ name: "", age: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={student.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
