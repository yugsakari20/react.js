import { useState } from "react"


const Employeecard = ({name, salarey, task, onDelete, id}) => {
    const [open, setOpen] = useState(0);

    return(
        <div>
            <h1>{name}</h1>
            <h2>{salarey}</h2>
            <h3>{task}</h3>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
};

export default Employeecard;