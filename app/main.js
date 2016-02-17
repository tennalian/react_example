import React from 'react';
import ReactDOM from 'react-dom';
import App from './component.jsx';
import PlayerContainer from './player.jsx';
import Timer from './timer.jsx';
// import './styles.scss';


var playList = [
	'http://stforex.ru/sites/stforex.com/themes/stforex_bs/assets/100/video/video.webm',
	'http://stforex.ru/sites/stforex.com/themes/stforex_bs/assets/121/video/video.mp4',
	'http://stforex.ru/sites/stforex.com/themes/stforex_bs/assets/95/video/video.mp4'
];

ReactDOM.render(<Timer currentDate={new Date()} date={'Jul,18,2016 00:00:00'}/>, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<PlayerContainer playList={playList}/>, document.getElementById('app'));



