// Global
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Local
import Post from '../pages/Post';
import Home from '../pages/Home';
import NavBar from '../components/shared/NavBar';
import Layout from '../components/shared/Layout';

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
