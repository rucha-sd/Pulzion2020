import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";
import Events from './Pages/Events'

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
            <footer>
              © 2020 PICT ACM Student Chapter. All Rights Reserved. Designed &
              Developed with ♥ by PASC Web Team
            </footer>
          </Route>
          <Route exact path="/login">
            <div style={{ zIndex: 10 }}>
              <Auth />
              <footer style={{position : "absolute",bottom : 0, width : "100%"}}>
                © 2020 PICT ACM Student Chapter. All Rights Reserved. Designed &
                Developed with ♥ by PASC Web Team
              </footer>
            </div>
          </Route>
          <Route exact path="/register">
            <div style={{ zIndex: 10 }}>
              <Auth />
              <footer style={{position : "absolute",bottom : 0, width : "100%"}}>
                © 2020 PICT ACM Student Chapter. All Rights Reserved. Designed &
                Developed with ♥ by PASC Web Team
              </footer>
            </div>
          </Route>
          <Route exact path="/about">
            <About />
            <footer>
              © 2020 PICT ACM Student Chapter. All Rights Reserved. Designed &
              Developed with ♥ by PASC Web Team
            </footer>
          </Route>
          <Route path="/team">
            <div style={{ zIndex: 10 }}>
              <Team />
              <footer>
                © 2020 PICT ACM Student Chapter. All Rights Reserved. Designed &
                Developed with ♥ by PASC Web Team
              </footer>
            </div>
          </Route>
          <Route path="/events">
            <div style={{ zIndex: 10 }}>
              <Events/>
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <div className="area">
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
      </div> */}
    </div>
  );
}

export default App;
