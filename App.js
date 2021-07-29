import "./App.css";
import Header from "./src/components/mainPage/Header";
import Home from "./src/components/mainPage/Home";
import Checkout from "./src/components/checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./src/components/auth/Login";
import { useStateValue } from "./src/components/stateProvider";
import { useEffect } from "react";
import { auth } from "./src/components/auth/firebase";
import Payment from "./src/components/checkout/Payment";
import Order from "./src/components/checkout/Order";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("The user is >>> ", user);
      if (user) {
        dispatch({
          type: "Set_User",
          user: user
        });
      } else {
        dispatch({
          type: "Set_User",
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/final">
            <Header />
            <Order />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
