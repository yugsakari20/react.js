import { useState, useEffect } from "react";
import API from "./config/Api";
import Employeecard from "./Employeecard";

const Employee = () => {
  const [data, setData] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await API.get("/employe"); 
      setData(res.data);
    } catch (error) {
      console.log("Error fetching employees:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await API.delete(`/employe/${id}`);
      getEmployees();
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {data.length > 0 ? (
        data.map((ele) => <Employeecard key={ele.id} {...ele} onDelete={deleteEmployee} />)
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Employee;
