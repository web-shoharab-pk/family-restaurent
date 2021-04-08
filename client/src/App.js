import './App.css';
import React, { createContext, useState } from "react";
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
import Checkout from './components/Checkout/Checkout';
import Orderedfood from './components/Orderedfood/Orderedfood';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const DetailsContext = createContext({})


function App() {
  const [loggedUser, setLoggedUser] = useState({})
  const [checkout, setCheckout] = useState({})
  return (
    <div className="App">
      <DetailsContext.Provider value={{
        loggedUser,
        setLoggedUser,
        checkout,
        setCheckout
      }}>       
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
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
                <Home />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/addfoods">
                <Foodsadded />
              </PrivateRoute>
              <PrivateRoute path="/checkout">
                <Checkout />
              </PrivateRoute>
              <PrivateRoute path="/orderedfood">
                <Header />
                <Orderedfood />
              </PrivateRoute>
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
          </Router>
       
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
