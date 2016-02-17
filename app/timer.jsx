import React from 'react';
import './timer.scss';


module.exports = React.createClass({
	getInitialState(){
		return{
			count: Date.parse(this.props.date)
		}
	},
	componentDidMount(){
		var interval = setInterval(this.tick,1000);
	},
	componentWillUnmount(){
		clearInterval(interval);
	},
	tick(){
		var next = this.state.count - 1000;
		this.setState({
			count: next
		})
	},
	render(){
		var amount =  this.state.count - Date.parse(this.props.currentDate),
			day = Math.floor(amount / 86400000),
			hours = new Date(amount).getHours(),
			mins = new Date(amount).getMinutes(),
			secs = new Date(amount).getSeconds();
		if (amount <= 0){
			var names = ['days','hours','mins','secs'];
			return(
				<div className="counter">
					{names.map((item, i) =>
						<div className={item}>
							<span>0</span><span>0</span>
						</div>
					)}
				</div>
			)
		}
		else{
			var days = String(Math.floor(day)).split("");
			return(
				<div className="counter">
					<div className="days">{days.map((item, i) =>
						<span key={i}>{item}</span>
					)}</div>
					<div className="hours"><span>{Math.floor(hours/10)}</span><span>{hours%10}</span></div>
					<div className="mins"><span>{Math.floor(mins/10)}</span><span>{mins%10}</span></div>
					<div className="secs"><span>{Math.floor(secs/10)}</span><span>{secs%10}</span></div>
				</div>
			)
		}
	}
})
