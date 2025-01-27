import { useState } from "react";
import API from "./config/Api";

const Form = ({ initialData = {} }) => {
  const [employee, setemployee] = useState({
    name: initialData.name ? initialData.name : "",
    salarey: initialData.salarey ? initialData.salarey : "",
    task: initialData.task ? initialData.task : "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setemployee({
      ...employee,
      [name]: value,
    });
  };

  const createEmployee = async (employee) => {
    if (initialData?.id) {
      await API.patch(`/employe/${initialData.id}`, employee);
    } else {
      await API.post("/employe", employee);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(employee);
    setemployee({ name: "", salarey: "", task: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInput}
        />
        <input
          type="number"
          name="salarey"
          value={employee.salarey}
          onChange={handleInput}
        />
        <input
          type="text"
          name="task"
          value={employee.task}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;

