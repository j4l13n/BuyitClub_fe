import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import BusinessHome from "./views/BusinessHome";
import SetupBusiness from "./views/SetupBusiness";
import BusinessCategory from "./views/BusinessCategory";
import BusinessPayment from "./views/BusinessPayment";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/business" component={BusinessHome} />
          <Route exact path="/business/create" component={SetupBusiness} />
          <Route
            exact
            path="/business/add/category"
            component={BusinessCategory}
          />
          <Route
            exact
            path="/business/add/payment"
            component={BusinessPayment}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
