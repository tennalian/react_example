import React from 'react';


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
