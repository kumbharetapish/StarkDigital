import React, { Component } from "react";
import { checkoutPageLink } from "../../Utils/Network";
// import { adminDashboardLink, loginLink } from "../../Utils/Network";
import fromStyle from "./userDetail.module.css";

class PageUserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {
        addressLine1: "",
        addressLine2: "",
        Country: "",
        State: "",
        City: "",
      },
    };
    this.goToCheckoutPage = this.goToCheckoutPage.bind(this);
  }
  goToCheckoutPage() {
    if (
      this.state.userDetail &&
      this.state.userDetail.addressLine1 &&
      this.state.userDetail.addressLine2 &&
      this.state.userDetail.Country &&
      this.state.userDetail.State &&
      this.state.userDetail.City
    ) {
      localStorage.setItem("userDetail", JSON.stringify(this.state.userDetail));
      this.props.history.push(checkoutPageLink);
    }
  }

  render() {
    return (
      <div className={fromStyle.Container}>
        <div className={fromStyle.fromWrapper}>
          <div className={fromStyle.fieldWrapper}>
            <label htmlFor="address">Address </label>
            <input
              type="text"
              placeholder={"Address line 1"}
              onChange={(e) => {
                this.setState({
                  userDetail: {
                    ...this.state.userDetail,
                    addressLine1: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder={"Address line 2"}
              onChange={(e) => {
                this.setState({
                  userDetail: {
                    ...this.state.userDetail,
                    addressLine2: e.target.value,
                  },
                });
              }}
            />
          </div>

          <div className={fromStyle.fieldWrapper}>
            <label htmlFor="Country">Country </label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  userDetail: {
                    ...this.state.userDetail,
                    Country: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className={fromStyle.fieldWrapper}>
            <label htmlFor="State">State </label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  userDetail: {
                    ...this.state.userDetail,
                    State: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className={fromStyle.fieldWrapper}>
            <label htmlFor="City">City </label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  userDetail: {
                    ...this.state.userDetail,
                    City: e.target.value,
                  },
                });
              }}
            />
          </div>

          <div className={fromStyle.button} onClick={this.goToCheckoutPage}>
            <div>Next</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageUserDetail;
