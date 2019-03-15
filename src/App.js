import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Posts from "./components/Posts";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    const fetchData = async () => {
      const result = await axios(
        "https://api.quickbutik.com/v1/products?apiKey="
      );
      this.setState({
        products: result.data
      });
    };

    fetchData();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>React Router Dom</h1>
        <header className="App-header">
          <Switch>
            <Route
              path="/products/:id"
              component={(props) => (
                <ProductDetails
                  data={
                    this.state.products.filter(
                      (product) => product.id === props.match.params.id
                    )[0]
                  }
                  {...props}
                />
              )}
            />
            <Route
              path="/products"
              component={(props) => (
                <Products products={this.state.products} {...props} />
              )}
            />
            <Route path="/Login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/posts" component={Posts} />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={() => <h3>NOT Found</h3>} />
            <Redirect to="/not-found" />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
