import React from "react";
import { Switch, Route } from "react-router-dom";
import EcomTestClient from "./EcomTestComponent/EcomTestClient";
import OTPServiceURL from "./EcomTestComponent/OTPServiceURL";

const NoMatchPage = () => {

  return (
    <div style={{margin:"325px"}}>
      <h3>404 - Not found</h3>
      <p>
        It looks like nothing was found at this location.
        Maybe try one of the links in the menu or press back to go to the previous page.
              </p>
     
    </div>


  );
};


export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={EcomTestClient} />
        <Route exact path="/OTPServiceURL" component={OTPServiceURL} />
        

        <Route component={NoMatchPage} />
      </Switch>
    </main>
  );
}