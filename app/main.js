import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Todo from './todo/todo.jsx';
import Player from './player/player.jsx';
import Timer from './timer/timer.jsx';

import './styles.scss';


var Nav = React.createClass({
	render() {
	    return (
			<div>
				<div className='navigation'>
					<h1>React Router Tutorial</h1>
					<ul role="nav">
					  <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Todo</Link></li>
					  <li><Link to="/timer" activeClassName="active">Timer</Link></li>
					  <li><Link to="/player" activeClassName="active">Player</Link></li>
					</ul>
				</div>
				{this.props.children}
			</div>
	    )
	}
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Nav} >
			<IndexRoute component={Todo}/>
			<Route path="/" component={Todo} />
			<Route path="timer" component={Timer}/>
			<Route path="player" component={Player}/>
		</Route>
	</Router>
), document.getElementById('app'))
