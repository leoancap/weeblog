// Global
import React from 'react';
import { Provider } from 'react-redux';
// Local
import Router from './router';
import store from './store';
import Global from './styled/global';

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
    <Router />
  </Provider>
);

export default App;
