import React from 'react';

<<<<<<< HEAD

export default class Badge extends React.Component {
  render() {
    return (
    	<div className='messages'>
	    	<button type='button' className='btn btn-primary'>
	    		{this.props.title} <span className='badge'>{this.props.number} 10</span>
	    	</button>
    	</div>
    )
  }
}

var options = {
	title: "Inbox",
	number: 30
}

// var element = React.CreateElement(Badge, options);
=======
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


>>>>>>> b09ebb0666d0b85a37031a14d2d945b10d6ae315
