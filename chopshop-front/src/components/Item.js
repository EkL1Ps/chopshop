import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <>
        <div className="item">
          <img
            src={"./images/" + this.props.item.image}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
          <p className="items-price">{this.props.item.price}$</p>
        </div>
      </>
    );
  }
}

export default Item;
