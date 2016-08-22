import { combineReducers } from 'redux';

import items from './itemReducer';
import cart from './cartReducer';

export default combineReducers({
	items,
	cart
});