import React from "react";
import "./Product.scss";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, rating, image, price }) {
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = (item) => {
    if (user) {
      alert("An item was added");
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      });
    } else {
      alert("Please log in to purchase item");
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="" />

      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
