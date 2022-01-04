import React from "react";
import "./Basket.scss";
import { useStateValue } from "../../store/StateProvider";

function Basket({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  return (
    <div className="basket__container">
      <div className="basket__item">
        <img src={image} alt="item" />
        <div className="basket__item__info">
          <h3>{title}</h3>
          <p className="basket__item__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="basket__item__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
          <button onClick={removeItem}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
