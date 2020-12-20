import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginRoute from "./login";
import HomeRoute from "./home";
import ViewVehicleRoute from "./viewVehicle";

const Router = () => (<BrowserRouter>
  <Switch>
    <Route path="/login">
      <LoginRoute />
    </Route>
    <Route path="/view">
      <ViewVehicleRoute />
    </Route>
    <Route path="/home">
      <HomeRoute />
    </Route>
    <Route
      exact
      path="/"
      render={() => {
        return (<Redirect to="/login" />)
      }}
    />
  </Switch>
</BrowserRouter>);

export default Router;
