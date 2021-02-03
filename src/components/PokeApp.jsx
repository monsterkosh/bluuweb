import React from 'react';
import Pokemones from './Pokemones';

import {Provider} from 'react-redux';
import generateStore from '../redux/store.js'


function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
}

export default App;
