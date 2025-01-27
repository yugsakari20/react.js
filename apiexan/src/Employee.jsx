import { useState } from "react"
import API from "./config/Api";
import Employeecard from "./Employeecard";


const Employee = () => {
    let [data, setData] = useState([]);
    const getEmployee = async() => {
        try{
            let res = await API.get("/employe");
            setData(res.data)
        }catch(error){
            console.log(error);
        }
    };

    const deleteEmployee = async(id) => {
        try{
            await API.delete(`/employe/${id}`);
            getEmployee();
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getEmployee();
      }, []);
      return(
        <div>
            {data.map((ele) => (
        <Employeecard key={ele.id} {...ele} onDelete={deleteEmployee} />
      ))}
        </div>
      )
};


export default Employee;