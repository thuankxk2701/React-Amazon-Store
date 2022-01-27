import React from "react";
import { useStateValue } from "../../StateProvider";
import { REMOVE_FROM_BASKET } from "../../types";
import "./CheckoutProduct.css";
const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const handleRemoveFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="imgCheckoutProduct" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hideButton && <button onClick={handleRemoveFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
};

export default CheckoutProduct;
