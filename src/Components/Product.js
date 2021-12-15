import React, { useState } from "react";
import "../index.css";

export default function Product(props) {
  const [count, setCount] = useState(0);
  const { details } = props;

  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count >= 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="product">
      <img src={details.image} width="50" alt="" />
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          disabled={count < 1}
          onClick={handleDecrementClick}
          className="product-sub"
        >
          -
        </button>
        <h3 className="product-count">{count ? count : ""}</h3>
        <button onClick={handleIncrementClick} className="product-add">
          +
        </button>
      </div>
    </div>
  );
}
