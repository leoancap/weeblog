import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

export default () => (
  <BrowserRouter>
    <NavBar />
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);
