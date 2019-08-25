import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Local
import { Layout, NavBar } from '#components';
import { Home, Post } from '#pages';

export default () => (
  <BrowserRouter>
    <NavBar />
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:postID" component={Post} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
