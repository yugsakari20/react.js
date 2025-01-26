import { useState } from "react";
import API from "./config/Api";

const Form = ({ initialData = {} }) => {
  const [student, setStudent] = useState({
    name: initialData.name ? initialData.name : "",
    age: initialData.age ? initialData.age : "",
    email: initialData.email ? initialData.email : "",
    phone: initialData.phone ? initialData.phone : "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const createstudent = async (student) => {
    if (initialData?.id) {
      console.log("update course", initialData.id);
    } else {
      let res = await API.post("/student", student);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createstudent(student);
    setStudent({
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleSubmit}
        />

        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleSubmit}
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleSubmit}
        />

        <input
          type="number"
          name="phone"
          value={student.phone}
          onChange={handleSubmit}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;