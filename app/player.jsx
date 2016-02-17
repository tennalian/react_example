import React from 'react';
import './player.scss';

var PLAYER_ID = 'player';

var Player = React.createClass({
	componentDidMount(){
		document.getElementById(PLAYER_ID).addEventListener('ended', this.props.onEnded, false)
	},
	componentWillUnmount(){
		document.getElementById(PLAYER_ID).removeEventListener('ended', this.props.onEnded, false)
	},
	render(){
		return(
			<video id={PLAYER_ID} src={this.props.src} width='500px' height='400px' controls autoPlay></video>
		)
	}
});

module.exports = React.createClass({
	getInitialState(){
		return{
			current: 0
		}
	},
	onEnded(){
		var newCurrent = this.state.current + 1;
		if (newCurrent >= this.props.playList.length){
			newCurrent = 0;
		}
		this.setState({
			current: newCurrent
		})
	},
	render(){
		var src = this.props.playList[this.state.current];
		return(
			<div className="player-wrapper">
				<Player src={src} onEnded={this.onEnded} />
			</div>
		)
	}
})

