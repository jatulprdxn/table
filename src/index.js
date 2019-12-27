import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router/route';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={ store }><Routes /></Provider>, document.getElementById('root'));

