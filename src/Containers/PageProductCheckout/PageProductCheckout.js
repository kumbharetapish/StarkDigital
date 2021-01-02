import React, { Component } from "react";
import checkoutStyle from "./Dashboard.module.css";
import confirmMark from "../../Assets/confirm_Tick.svg";
export class PageProductCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refproductList: localStorage.getItem("productList")
        ? JSON.parse(localStorage.getItem("productList"))
        : [],
      productList: localStorage.getItem("productList")
        ? JSON.parse(localStorage.getItem("productList"))
        : [],
      userDetail: localStorage.getItem("userDetail")
        ? JSON.parse(localStorage.getItem("userDetail"))
        : {},
      sucessfullMessage: false,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  addQuantity(el, opration) {
    let lastIndex = [...this.state.productList].length;
    let productList = [...this.state.productList];
    let refDataObj = this.state.refproductList.filter((refel) => {
      return refel.id === el.id;
    });
    let upDateObj = el;
    if (opration === "add") {
      el.quantity = el.quantity + 1;
      el.price = refDataObj[0].price * el.quantity;
      [...productList, upDateObj].slice(lastIndex);
    } else {
      el.quantity = el.quantity > 1 ? el.quantity - 1 : el.quantity;
      el.price = refDataObj[0].price * el.quantity;
      [...productList, upDateObj].slice(lastIndex);
    }
    this.setState({
      productList,
    });
  }

  render() {
    return (
      <div className={checkoutStyle.Container}>
        <div className={checkoutStyle.checkoutCartContainer}>
          <h2>Total Item:{this.state.productList.length}</h2>
          {this.state.refproductList
            ? this.state.productList.map((el) => {
                return (
                  <div className={checkoutStyle.cartWrapper}>
                    <img className={checkoutStyle.cartImg} alt={el.name} src={el.preview} />
                    <div className={checkoutStyle.cartDetailWrapper}>
                      <h3>{el.name}</h3>
                      <p style={{ display: "flex" }}>
                        Qty.:{" "}
                        <div
                          className={checkoutStyle.quantityBtn}
                          onClick={(e) => {
                            this.addQuantity(el);
                          }}
                        >
                          {" "}
                          -{" "}
                        </div>
                        {el.quantity ? el.quantity : 1}{" "}
                        <div
                          className={checkoutStyle.quantityBtn}
                          onClick={(e) => {
                            this.addQuantity(el, "add");
                          }}
                        >
                          {" "}
                          +{" "}
                        </div>{" "}
                      </p>
                      <p>Amount: Rs. {el.price}</p>
                    </div>
                  </div>
                );
              })
            : ""}

          {this.state.sucessfullMessage ? (
            <div className={checkoutStyle.SucessMessageWrapper}>
              <div
                style={{
                  fontSize: "20px",
                }}
              >
                {" "}
                Order Confirm
              </div>
              <img src={confirmMark} alt="" />
              <div>Thank you for order.</div>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={checkoutStyle.checkoutUserDetailsWrapper}>
          <h2>User Details</h2>
          <div className={checkoutStyle.userDetails}>
            <div className={checkoutStyle.userDetailsFiled}>
              <h3>Address</h3>
              <p>
                {this.state.userDetail.addressLine1} <br />
                {this.state.userDetail.addressLine2}
              </p>
            </div>
            <div className={checkoutStyle.userDetailsFiled}>
              <h3>Country</h3>
              <p>{this.state.userDetail.Country}</p>
            </div>
            <div className={checkoutStyle.userDetailsFiled}>
              <h3>State</h3>
              <p>{this.state.userDetail.State}</p>
            </div>

            <div className={checkoutStyle.userDetailsFiled}>
              <h3>City</h3>
              <p>{this.state.userDetail.City} </p>
            </div>

            {this.state.productList >= 0 ? (
              <div className={checkoutStyle.placeOrderBtn}>Place Order</div>
            ) : (
              <div
                className={checkoutStyle.placeOrderBtn}
                onClick={() => {
                  let confirmOrderDetail = {
                    userDetail: this.state.userDetail,
                    OrderDetail: this.state.productList,
                  };
                  console.log(confirmOrderDetail);
                  this.setState(
                    {
                      refproductList: [],
                      productList: [],
                      sucessfullMessage: true,
                    },
                    () => {
                      localStorage.removeItem("productList");
                    }
                  );
                }}
              >
                Place Order
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PageProductCheckout;
