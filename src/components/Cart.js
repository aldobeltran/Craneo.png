import React from "react";
import "../styles/cart.css";

const Cart = (props) => {
  const products = props.items.map((item) => {
    return { ...item, total: itemTotal(item.qty, item.price) };
  });

  const cartTotal = sumArray(products);

  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + Number(array[i].total);
    }
    return sum.toFixed(2);
  }

  const checkout = () => {
    alert(
      `Tu compra por un valor de $${cartTotal} Gracias por visitar craneo.png.`
    );
  };

  function itemTotal(qty, price) {
    return (Number(qty) * Number(price)).toFixed(2);
  }

  return (
    <div className="cart-items">
      <h2>Carrito</h2>
      {products.map((product) => {
        return (
          <div className="cart-item" key={product.id}> {/* Asegura una key única */}
            <div className="cart-item-left">
              <div className="cart-img">
                <img className="cart-image" src={product.image} alt={product.title} />
              </div>
              <div className="cart-item-info">
                <div>{product.title}</div>
                <div>Precio: {" $" + product.price}</div>
                <div>
                  Cantidad:{" "}
                  <button onClick={() => props.reduceQty(product.id)}>-</button>
                  {" " + product.qty + " "}
                  <button onClick={() => props.addToCart(product.id)}>+</button>{" "}
                  <button className="remove-button" onClick={() => props.removeItem(product.id)}>
                    Eliminar del carrito
                  </button>
                </div>
              </div>
            </div>
            <div className="item-total">
              <div>{"$" + product.total}</div>
            </div>
          </div>
        );
      })}
      <div className="cart-total">
        <div>Total del pedido:</div>
        <div className="order-total">{"$" + cartTotal}</div>
      </div>
      <div className="cart-checkout">
        <button onClick={checkout} className="checkout">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Cart;
