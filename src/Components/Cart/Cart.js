import React from "react";
import cartStyle from "./Card.module.css";

const Cart = (props) => {
  const { brand, name, description, preview, price, title } = props.data;

  return (
    <div className={cartStyle.productCart} href="../page/Details.html?=1">
      <img src={preview} alt={name} />
      <div className={cartStyle.productDetail}>
        <h2>{name}</h2>
        <h5>{brand ? brand : ""}</h5>
        <div
          className={cartStyle.priceWrapper}
          onClick={() => {
            props.onClick();
          }}
        >
          <h3>Rs. {price}</h3>
        </div>
      </div>
    </div>
  );
};
export default Cart;
