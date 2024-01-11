import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <>
        <div className="basket-item">
          <img src={"./images/" + this.props.item.image} />
          <div>
            <h2>{this.props.item.title}</h2>
            <p className="items-price">{this.props.item.price}$</p>
          </div>
          <FaTrash
            className="delete-icon"
            onClick={() => this.props.onDelete(this.props.item.id)}
          />
        </div>
      </>
    );
  }
}

export default Order;
