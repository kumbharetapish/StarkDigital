import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import PageProductCheckout from "./Containers/PageProductCheckout";
import PageUserDashboard from "./Containers/PageUserDashboard";
import PageUserDetail from "./Containers/PageUserDetail";
import { checkoutPageLink, userDashboardPageLink, userDetailPageLink } from "./Utils/Network";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav
            style={{
              padding: "1rem",
            }}
          >
            <Link to={userDashboardPageLink} style={{ margin: "1rem" }}>
              Home
            </Link>
            <Link to={userDetailPageLink} style={{ margin: "1rem" }}>
              User Detail
            </Link>
            <Link to={checkoutPageLink} style={{ margin: "1rem" }}>
              Checkout
            </Link>
          </nav>
          <Switch>
            <Route
              path={userDetailPageLink}
              name="User Detail"
              render={(props) => <PageUserDetail {...props} />}
              // exact
            />
            <Route
              path={checkoutPageLink}
              name="User Dashboard"
              render={(props) => <PageProductCheckout {...props} />}
              // exact
            />
            <Route
              path={userDashboardPageLink}
              name="Dashboard"
              render={(props) => <PageUserDashboard {...props} />}
              // exact
            />

            {/* <Route
                  path=""
                  name="404"
                  // render={() => (
                  //   <div className="notfound">
                  //     404 ! <br /> Not found{" "}
                  //   </div>
                  // )}
                /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
