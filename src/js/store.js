import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let middleware=applyMiddleware(thunk);

export default createStore(reducers, middleware);