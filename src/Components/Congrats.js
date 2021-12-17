import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";

const congrats = () => {
    return (
        <div>
            <nav>
                <h3>BLOOM EATS</h3>
                <Link to="/"><button id="home-button">Home</button></Link>
            </nav>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            <h1>Congrats! Pizza is on its way!</h1>
        </div>
    )
}

export default congrats;