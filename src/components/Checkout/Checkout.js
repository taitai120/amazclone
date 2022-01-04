import React from "react";
import "./Checkout.scss";
import Subtotal from "../Subtotal/Subtotal";
import Basket from "../Basket/Basket";
import { useStateValue } from "../../store/StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h1>Hello {user?.email}</h1>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, index) => (
            <Basket
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal basket={basket} />
      </div>
    </div>
  );
}

export default Checkout;
