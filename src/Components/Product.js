import React from "react";
import useProductCounter from "./useProductCounter";

export default function Product(props) {
  const { details } = props;
  const {count, increment, decrement } = useProductCounter();

  if (!details) {
    return null;
  }

  return (
    <div className="product">
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          disabled={count === 0}
          onClick={decrement}
        >
          -
        </button>
        <h3 className="product-count">{count ? count : ""}</h3>
        <button className="product-add" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
