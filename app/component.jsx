import React from 'react';


const items = ['Item #1', 'Item #2', 'Item #3'];

module.exports = React.createClass ({
	removeItem(){
		var item = e.target;
	}
	render(){
		return(
			<div className='item'>
				<p>{this.props.text}</p>
				<span onclick={this.removeItem}><i className="fa fa-times-circle"></i></span>
				<span onclick={this.editItem}><i className="fa fa-pencil-squaree"></i></span>
			</div>
		)
	}
});


