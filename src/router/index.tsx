import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout, NavBar } from "#components";

import { Home, Post, AddPost } from "#pages";

export const AppRouter = () => (
  <BrowserRouter>
    <NavBar />
    <Layout>
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Home {...props} key={Math.random()} />}
        />
        <Route path="/post/:postID" component={Post} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
