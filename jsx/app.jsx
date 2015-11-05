var List = React.createClass({
    render: function() {
        return (
        	<ul>
        		<li>Hello {this.props.name}</li>
        		<li>Hello {this.props.surname}</li>
        		<li>Hello {this.props.lastname}</li>
        		<li>Hello {this.props.nickname}</li>
        	</ul>
        );
    }
});

ReactDOM.render(
	<List name="World" surname='Yoyo' lastname='Nick' nickname='Ooumph' />,
    document.getElementById('container')
);


