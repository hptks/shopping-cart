import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import InputItem from './InputItem';

@connect((store) => {
	return {
		items: store.items.items
	};
})

export default class App extends React.Component {
	render() {
		let { items }=this.props;
		const Items=items.map((item) => {
			return <Item key={item.id} {...item} />
		});

		return (
			<div>
				<InputItem />
				<div>{Items}</div>
			</div>
		)
	}
}