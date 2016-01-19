import React from 'react';

const items = ['Item #1', 'Item #2', 'Item #3'];

module.exports = React.createClass ({
	render(){
		return(
			<div>
				<h2>Hello!</h2>
				<ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
			</div>
		)
	}
});


