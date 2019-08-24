// Global
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Local
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

export default () => (
  <BrowserRouter>
    <NavBar />
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
