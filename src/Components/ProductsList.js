import React from "react";
import Product from "./Product.js";

const ProductsList = (props) => {
    const { products, onDeleteClick } = props;
    
    return (
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => onDeleteClick(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
}
export default ProductsList;


