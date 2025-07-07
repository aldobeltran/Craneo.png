// Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const Products = (props) => {
  const products = props.products;

  return (
    <div className={props.isRelated ? "products-related-container" : "products-page-container"}>
      {!props.isRelated && (
        <div className="products-section-title">
          <h2>Nuestros Productos</h2>
        </div>
      )}
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="image-div">
                <Link to={`/products/${product.category}/${product.id}`}>
                  <img className="product-image" src={product.image} alt={product.title} />
                </Link>
              </div>
              <div className="product-info">
                <Link to={`/products/${product.category}/${product.id}`}>
                  <div className="title">{product.title}</div>
                </Link>
                <div className="purchase">
                  <div className="price">${product.price}</div>
                  <button className="add-to-cart-button" onClick={() => props.addToCart(product.id)}>
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
