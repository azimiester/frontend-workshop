import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./Components/App";

const RoutedApp = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" render={() => <h1>This is About page</h1>} />
      </Switch>
    </BrowserRouter>
  </div>
);
render(<RoutedApp />, document.getElementById("app"));
