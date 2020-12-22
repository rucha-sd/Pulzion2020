import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/previous-glimpses">
            <Glimpses />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
