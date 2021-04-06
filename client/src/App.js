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
import Foodsadded from './components/Foodsadded/Foodsadded';
import Header from './components/Header/Header';
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
            <Header />
            <Breakfast />
            <Home />
          </Route>
          <Route path="/lunch">
            <Header />
            <Lunch />
            <Home />
          </Route>
          <Route path="/diner">
            <Header />
            <Diner />
            {/* <Home /> */}
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addfoods">
            <Foodsadded />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
