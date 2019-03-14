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

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>React Router Dom</h1>
        <header className="App-header">
          <Switch>
            <Route path="/products/:name/:price" component={ProductDetails} />
            <Route path="/products" component={Products} />
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
