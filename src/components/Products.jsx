import React, { Component } from "react";
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
  flexDirection: "column",
  margin: 5
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    this.setState({
      products: this.props.products
    });
  }
  render() {
    const { products } = this.state;
    return (
      <div style={mainDivStyle}>
        <h2>Products</h2>
        <ul style={listStyle}>
          {products.map((product, index) => (
            <Link key={index} to={`products/${product.id}`}>
              <li style={listItemStyle}>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
