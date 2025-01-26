import { useState } from "react"
import Form from "./Form";  



const Studentcard = ({name,age,email,phone,id}) => {
    const [open, setOpen] = useState(false);
    const handleopen = () => {
        setOpen(true);
    };
    const handleclose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <button onClick={handleopen}>Edit</button>
                <button onClick={handleopen}>Delete</button>
                <Form initialData={{name,age,email,phone,id}}  />
            </div>
        </div>
    );
};

export default Studentcard;