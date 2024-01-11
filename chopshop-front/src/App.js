import "./style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair 1",
          image: "chair-first.jpg",
          description: "Lorem ispum dolor sit amet",
          category: "chairs",
          price: "5.99",
        },
        {
          id: 2,
          title: "Chair 2",
          image: "chair-2.webp",
          description: "Lorem ispum dolor sit amet",
          category: "chairs",
          price: "12.99",
        },
        {
          id: 3,
          title: "Table 1",
          image: "table-1.webp",
          description: "Lorem ispum dolor sit amet",
          category: "tables",
          price: "21.99",
        },
        {
          id: 4,
          title: "Table 1",
          image: "table-2.webp",
          description: "Lorem ispum dolor sit amet",
          category: "tables",
          price: "25.99",
        },
        {
          id: 5,
          title: "Couch 1",
          image: "couch-1.webp",
          description: "Lorem ispum dolor sit amet",
          category: "couches",
          price: "74.99",
        },
        {
          id: 6,
          title: "Couch 2",
          image: "couch-2.jpg",
          description: "Lorem ispum dolor sit amet",
          category: "couches",
          price: "89.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
          {this.state.showFullItem && (
            <ShowFullItem
              item={this.state.fullItem}
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
            />
          )}
          <Footer />
        </div>
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(
        (element) => element.category === category
      ),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((element) => element.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((element) => {
      if (element.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
