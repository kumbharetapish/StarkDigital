import React, { Component } from "react";
import DashboardStyle from "./dashboardStyle.module.css";
// import { loginLink } from "../../Utils/Network";
import WebServices from "../../Services/WebServices";
import Cart from "../../Components/Cart";
import { userDetailPageLink } from "../../Utils/Network";

class PageUserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      addToCardProduct: localStorage.getItem("productList")
        ? JSON.parse(localStorage.getItem("productList"))
        : [],
    };
    this.addToCartProduct = this.addToCartProduct.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
    WebServices.getProductList()
      .then((res) => {
        if (res && res.data) {
          this.setState({
            productList: res.data,
          });
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err + "in product listing");
      });
  }

  addToCartProduct(product) {
    let addedCardProduct = this.state.addToCardProduct;

    let exitingProduct = addedCardProduct.filter((el) => {
      return el.id === product.id;
    });
    if (exitingProduct.length <= 0) {
      console.log("addedCardProduct", exitingProduct);
      this.setState(
        {
          addToCardProduct: [...this.state.addToCardProduct, { ...product, quantity: 1 }],
        },
        () => localStorage.setItem("productList", JSON.stringify(this.state.addToCardProduct))
      );
    }
  }

  render() {
    return (
      <div className={DashboardStyle.Container}>
        <div class={DashboardStyle.containerHeading}>
          <h1>Accessories for Men &amp; Women</h1>
          {this.state.addToCardProduct.length <= 0 ? (
            <div className={DashboardStyle.nextBtnDisable}>Next</div>
          ) : (
            <div
              className={DashboardStyle.nextBtn}
              onClick={() => this.props.history.push(userDetailPageLink)}
            >
              Next {this.state.addToCardProduct.length}
            </div>
          )}
        </div>
        <div class={DashboardStyle.containerClothingAccessories} style={{ display: "flex" }}>
          {this.state.productList.map((el) => {
            return <Cart data={el} onClick={() => this.addToCartProduct(el)} />;
          })}
        </div>
      </div>
    );
  }
}

export default PageUserDashboard;
