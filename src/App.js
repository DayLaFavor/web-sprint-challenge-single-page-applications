import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";




const App = () => {
  return (
    <div className="header">
      <h1>Site Title</h1>
      <nav>
        <Link to="/"><button id="home-button">Home</button></Link>
        <Link to="/pizza"><button id="order-pizza">Pizza?</button></Link>
      </nav>
      <Switch>
        <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
      <Home/>
    </div>
  );
};
export default App;