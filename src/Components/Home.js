import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Form from "./Components/Form";


const Home = () => {
    return (
    <div>
      <h1>Your favorite food, delivered while coding</h1>
      <img src='Pizza.jpg' alt='pizza time'/>
      <br/>
      <h3>Food Delivery in gotham City</h3>
    </div>
    )
  }

export default Home;