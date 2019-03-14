import React from "react";
const buttonStyle = {
  border: "1px solid white",
  background: "none",
  color: "white",
  borderRadius: 4,
  padding: "10px 6px"
};
const ProductDetails = (props) => {
  return (
    <div>
      <h3>name : {props.match.params.name}</h3>
      <h4>price: {props.match.params.price} </h4>
      <button
        style={buttonStyle}
        onClick={() => props.history.push("/products")}
      >
        buy
      </button>
    </div>
  );
};

export default ProductDetails;
