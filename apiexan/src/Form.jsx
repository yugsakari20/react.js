import { useState } from "react";
import API from "./config/Api";

const Form = ({ onEmployeeAdded }) => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    task: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employe", employee); 
      setEmployee({ name: "", salary: "", task: "" });
      onEmployeeAdded(); 
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleInput}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="task"
          placeholder="Task"
          value={employee.task}
          onChange={handleInput}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
