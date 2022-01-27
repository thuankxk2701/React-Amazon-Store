import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { ADD_TO_BASKET } from "../../types";
const Product = ({ title, image, price, rating, id }) => {
  const [state, dispatch] = useStateValue();
  const handleAddToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="img" />
      <button onClick={handleAddToBasket}> Add to Basket</button>
    </div>
  );
};

export default Product;
