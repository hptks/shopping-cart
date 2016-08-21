import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

let middleware=applyMiddleware(thunk);

export default createStore(middleware);