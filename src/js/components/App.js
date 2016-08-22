import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import InputItem from './InputItem';

@connect((store) => {
	return {
		items: store.items.items,
		itemsInCart: store.cart.itemsInCart,
		itemsQuantity: store.cart.itemsQuantity
	};
})

export default class App extends React.Component {
	render() {
		let { items }=this.props;
		const Items=items.map((item) => {
			return <Item key={item.id} {...item} />
		});

		let { itemsInCart }=this.props;
		const ItemsInCart=itemsInCart.map((id) => {
			let quantity=1;
			const { itemsQuantity }=this.props;

			for (let i=0;i<itemsQuantity.length;i++) {
				if (itemsQuantity[i]===id) {
					quantity++;
				}
			}

			let item=null;
			for (let i=0;i<items.length;i++) {
				if (items[i].id===id) {
					item=items[i];
					break;
				}
			}

			return <div key={id}>{item.name}&nbsp;${item.price}&nbsp;x&nbsp;{quantity}</div>
		});

		return (
			<div>
				<InputItem />
				<div>{Items}</div>
				<h2>Cart:</h2>
				<div>{ItemsInCart}</div>
			</div>
		)
	}
}