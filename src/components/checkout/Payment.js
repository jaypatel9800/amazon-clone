import React from "react";
import { useStateValue } from "../stateProvider";
import "./payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleBuy = () => {
    dispatch({
      type: "Empty_Cart",
    });
    history.replace("/final");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">({cart?.length} items)</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Amazon University,</p>
            <p>Earth, SomeWhere on Milkyway</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and dilivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                raiting={item.raiting}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Checkout</h3>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Your total item : {cart?.length} & Total Bill :
                    <strong> {value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
          <div className="payment__details">
            {cart?.length >= 1 && <button onClick={handleBuy}>Buy Now</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
