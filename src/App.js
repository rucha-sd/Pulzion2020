import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

    </Router>
   </div>
  );
}

export default App;
