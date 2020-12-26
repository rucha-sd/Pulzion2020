import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";

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
            <div style={{ zIndex: 10 }}>
              <Auth />
            </div>
          </Route>
          <Route exact path="/register">
            <div style={{ zIndex: 10 }}>
              <Auth />
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/team">
            <div style={{ zIndex: 10 }}>
              <Team />
            </div>
          </Route>
        </Switch>
      </Router>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
