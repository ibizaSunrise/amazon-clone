import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Hzh3mKCpA0W4em27JeJb0DdjFxqT5jnY7HdXPEzcFCfSaJcQxzz4AadnjE3FxKFxGJ6CHslUlkR3msdkdKGPrpT00yEMxnrkg');
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER >>>', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
