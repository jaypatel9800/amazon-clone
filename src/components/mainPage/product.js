import React from "react";
import { useStateValue } from "../stateProvider";
import "./product.css";

const Product = ({ id, title, price, raiting, image }) => {
  
  const[, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "Add_To_Cart",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        raiting: raiting
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__raiting">
          {Array(raiting)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="products" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
