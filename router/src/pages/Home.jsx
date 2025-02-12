import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {data.map((product) => (
          <div 
            key={product.id} 
            style={{ 
              width: "300px", 
              border: "1px solid #ddd", 
              borderRadius: "10px", 
              padding: "15px", 
              display: "flex", 
              flexDirection: "column", 
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} 
              />
            </div>
            <h5 style={{ margin: "10px 0" }}>{product.title}</h5>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {renderStars(product.rating.rate)} ({product.rating.count} reviews)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
