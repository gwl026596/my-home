import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import "./static/css/common.less"
import configureStore from './page/store'
import {Provider} from 'react-redux'
const store=configureStore()
ReactDOM.render(
 <Provider store={store}>
 <AppRouter />
 </Provider>
   
  ,
  document.getElementById('root')
);

