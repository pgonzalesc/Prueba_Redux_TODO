
import React from 'react';
import { Provider } from 'react-redux';
import MiApp from './src/components/MiApp';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store = {store}>
      <MiApp/>
    </Provider>
  );
};

export default App;