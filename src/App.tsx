import React from "react";
import { Provider } from "react-redux";

import Home from "./pages/home";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
