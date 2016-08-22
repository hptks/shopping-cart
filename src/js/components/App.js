import React from 'react';
import { connect } from 'react-redux';

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
			return <div key={item.id}>{item.name}&nbsp;{item.price}</div>
		});

		return (
			<div>
				<InputItem />
				<div>{Items}</div>
			</div>
		)
	}
}