import React from "react";
import "./checkout.css";
import AmazonAd from "../../assets/amazonAd.jpg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../stateProvider";
import SubTotal from "./SubTotal"

function Checkout() {
  const [{ cart, user }] = useStateValue();
  return (
    <div  className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={AmazonAd} alt="amazon-ad" />
        {cart?.length === 0 ? (
          <div>
            <h3 className="checkout__title">Hello, { user ? user.email : "Customer"}</h3>
            <h2 className="checkout__title">Your Shopping cart is empty.</h2>
          </div>
        ) : (
          <div>
            <h3 className="checkout__title">Hello, { user ? user.email : "Customer"}</h3>
            <h2 className="checkout__title">Your Shopping Cart.</h2>
            {cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                raiting={item.raiting}
              />
            ))}
          </div>
        )}
      </div>
        <div className="checkout__right">
          <SubTotal/>
        </div>
    </div>
  );
}

export default Checkout;
