import React from "react";
import { Provider } from "react-redux";

import PostList from "./components/PostList";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
};

export default App;
