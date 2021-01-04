import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginRoute from "./login";
import HomeRoute from "./home";
import ViewVehicleRoute from "./viewVehicle";
import CheckInRoute from "./checkIn";
import CheckInValidateRoute from "./checkInValidate";

const Router = () => (<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route path="/login">
      <LoginRoute />
    </Route>
    <Route path="/view">
      <ViewVehicleRoute />
    </Route>
    <Route path="/checkIn">
      <CheckInRoute />
    </Route>
    <Route path="/checkInValidate">
      <CheckInValidateRoute />
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
