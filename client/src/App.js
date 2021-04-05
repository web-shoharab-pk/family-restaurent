import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">

          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
