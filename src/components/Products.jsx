import React from "react";
import { Link } from "react-router-dom";

const mainDivStyle = {
  width: "90%"
};
const listStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  margin: 0,
  padding: 0,
  marginBottom: 30
};
const listItemStyle = {
  width: "200px",
  height: "300px",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 5
};
const Products = (props) => {
  const Products = [
    { name: "product-1", price: 2400 },
    { name: "product-2", price: 2500 },
    { name: "product-3", price: 200 },
    { name: "product-4", price: 2400 },
    { name: "product-5", price: 2400 },
    { name: "product-6", price: 2500 },
    { name: "product-7", price: 2600 },
    { name: "product-8", price: 2700 },
    { name: "product-9", price: 2800 },
    { name: "product-10", price: 9200 },
    { name: "product-11", price: 2400 },
    { name: "product-12", price: 2300 },
    { name: "product-13", price: 2400 },
    { name: "product-14", price: 2300 },
    { name: "product-15", price: 2400 },
    { name: "product-16", price: 2300 },
    { name: "product-17", price: 2400 },
    { name: "product-18", price: 2300 },
    { name: "product-19", price: 2400 },
    { name: "product-20", price: 2500 },
    { name: "product-21", price: 25600 },
    { name: "product-22", price: 2060 },
    { name: "product-23", price: 200 },
    { name: "product-24", price: 2080 }
  ];
  return (
    <div style={mainDivStyle}>
      <h2>Products</h2>
      <ul style={listStyle}>
        {Products.map((product, index) => (
          <Link key={index} to={`products/${product.name}/${product.price}`}>
            <li style={listItemStyle}>{product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Products;
