import React from 'react';
import { Provider } from 'react-redux';
import MainContainer from './main_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default Root;