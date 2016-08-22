import React from 'react';
import { connect } from 'react-redux';

import { addToCart, incQuantity } from '../actions/cartActions';

@connect((store) => {
	return {
		items: store.items.items,
		itemsInCart: store.cart.itemsInCart,
		itemsQuantity: store.cart.itemsQuantity
	};
})

export default class Item extends React.Component {
	isItemInCart(id) {
		const { itemsInCart }=this.props;
		for (let i=0;i<itemsInCart.length;i++) {
			if (itemsInCart[i]===id) {
				return true;
			}
		}
		
		return false;
	}

	addItemToCart() {
		const { id, items }=this.props;
		for (let i=0;i<items.length;i++) {
			if (items[i].id===id) {
				if (!this.isItemInCart(id)) {
					this.props.dispatch(addToCart(id));
				} else {
					this.props.dispatch(incQuantity(id));
				}

				break;
			}
		}
	}

	render() {
		const { name, price }=this.props;

		return (
			<div>
				<span>{name}&nbsp;${price}</span>
				<button type="submit" onClick={this.addItemToCart.bind(this)}>Add to cart</button>
			</div>
		)
	}
}