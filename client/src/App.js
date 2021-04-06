import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Diner from './components/Diner/Diner';
import Admin from './components/Admin/Admin';
function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/breakfast">
            <Home />
            <Breakfast />
          </Route>
          <Route path="/lunch">
            <Home />
            <Lunch />
          </Route>
          <Route path="/diner">
            <Home />
            <Diner />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
