import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setProduct(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">{product.title}</h1>
      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-category">{product.category}</p>
    </div>
  );
};

export default Details;
