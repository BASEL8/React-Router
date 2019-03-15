import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

const buttonStyle = {
  border: "1px solid white",
  background: "none",
  color: "white",
  borderRadius: 4,
  padding: "10px 6px"
};
const ProductDetails = (props) => {
  const data = props.data;
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      {Object.keys(data).map((key, index) => (
        <div key={index}>
          {key} :
          {key === "description" ? ReactHtmlParser(data[key]) : data[key]}
        </div>
      ))}

      <button
        style={buttonStyle}
        // onClick={() => props.history.push("/products")}
        onClick={() => setEditMode(!editMode)}
      >
        edit
      </button>
    </div>
  );
};

export default ProductDetails;
