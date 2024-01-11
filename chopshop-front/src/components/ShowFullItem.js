import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <>
        <div className="modal-item">
          <div className="sub-modal-item">
            <img
              src={"./images/" + this.props.item.image}
              onClick={() => this.props.onShowItem(this.props.item)}
            />
            <div>
              <h2>{this.props.item.title}</h2>
              <p>{this.props.item.description}</p>
              <p className="items-price">
                Price: <span>{this.props.item.price}$</span>
              </p>
              <div
                className="buy-button"
                onClick={() => (
                  this.props.onAdd(this.props.item),
                  this.props.onShowItem(this.props.item)
                )}
              >
                Buy
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowFullItem;
