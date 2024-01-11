import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import { type } from "../type";

const showOrders = (props) => {
  let totalMoney = 0;
  props.orders.forEach(
    (element) => (totalMoney += Number.parseFloat(element.price))
  );
  return (
    <>
      {props.orders.map((element) => (
        <Order onDelete={props.onDelete} key={element.id} item={element} />
      ))}
      <p className="total-money">
        Total: {new Intl.NumberFormat().format(totalMoney)}$
      </p>
    </>
  );
};

const showNothing = () => {
  return (
    <>
      <div className="empty">
        <h2>Your basket is empty</h2>
      </div>
    </>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div>
          <span className="logo">{type.name}</span>
          <ul className="navbar">
            <li>About us</li>
            <li>Contacts</li>
            <li>Helpful info</li>
          </ul>
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />

          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
        <div className="presentation"></div>
      </header>
    </>
  );
}
