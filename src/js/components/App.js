import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/itemActions';

@connect((store) => {
	return {
		items: store.items.items
	};
})

export default class App extends React.Component {
	addItem() {
		this.props.dispatch(addItem('hi there', '$23'));
	}

	render() {
		let { items }=this.props;
		const Items=items.map((item) => {
			return <div key={item.id}>{item.name}&nbsp;{item.price}</div>
		});

		return (
			<div>
				<div>{Items}</div>
				<button type="submit" onClick={this.addItem.bind(this)}>Add item</button>
			</div>
		)
	}
}