import { useState } from "react";

const Data = () => {
    let [data, setData] = useState({
        fruitName: "",
        price: "",
        type: "",
        image: "",
        isCompleted: false,
    });

    let [list, setList] = useState([]);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setList([...list, { ...data, id: Date.now() }]);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="fruitName"
                    placeholder="Fruit Name"
                    onChange={handleInput}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type (e.g., Citrus, Berry)"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleInput}
                />
                <input type="submit" value="Add Fruit" />
            </form>
            <hr />
            {list.map(({ fruitName, price, type, image, isCompleted, id }) => (
                <div key={id}>
                    <h3>{fruitName}</h3>
                    <p>Price: {price}</p>
                    <p>Type: {type}</p>
                    {image && <img src={image} alt={fruitName} width="100" />}
                    <button>
                        {isCompleted ? "Completed" : "buy"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Data;
