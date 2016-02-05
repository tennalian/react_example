import React from 'react';
import ReactDOM from 'react-dom';
// import Note from './component.jsx';
import './styles.scss';

var App = React.createClass ({
	propTypes: {
		text: React.PropTypes.string.isRequired
	},
	getInitialState(){
		return {
			todos: ['then']
		}
	},
	deleteTask(e){
		e.preventDefault();
		let i = +e.target.value,
			key = this.props.todos.splice(i,1);
		this.setState({
			todos: this.props.todos
		});
		console.log(this.props.todos);
	},
	addTask(e){
		e.preventDefault();
		this.setState({
			todos: this.state.todos.concat([this.refs.task.value])
		});
		this.refs.task.value = '';
	},
	render(){
		console.log(this.state.todos);
		return(
			<div className='todo'>
				<h1>Todo List</h1>
				<TasList todos={this.state.todos}/>
				<form onSubmit={this.addTask} >
					<div className='form-group'>
						<textarea type="text" ref="task" className='form-control'>{this.props.text}</textarea>
					</div>
					<button type="submit" className='btn btn-success pull-right'> Add Task </button>
					<div className='clearfix'></div>
				</form>
			</div>
		)
	}
});

var TasList = React.createClass ({

	render(){
		return(
			<div className='list edit-list'>
				<ul>{this.props.todos.map((item, i) =>
					<li key={i}>
						<Task index={i} val={item} todos={this.props.todos} del={this.deleteTask}/>
					</li>
				)}</ul>
			</div>
		)
	}
})

const Task = React.createClass({
	getInitialState(){
		return {
			act: ''
		}
	},
	propTypes: {
		val: React.PropTypes.string.isRequired
	},
	editTask(e){
		e.preventDefault();
		this.setState({
			act: 'edit',
		});
	},
	saveTask(e){
		e.preventDefault();
		console.log()
		this.props.todos[this.props.index] = this.refs.editTask.value;
		this.setState({
			act: '',
		});
	},
	render(){
		if (this.state.act !== "edit"){
			return(
				<div>
					<span ref="text">{this.props.todos[this.props.index]}</span>
					<div className='buttons pull-right'>
						<button onClick={this.props.del} value={this.props.index} type="button" className='btn btn-danger btn-xs  btn-block'> Remove </button>
						<button onClick={this.editTask} value={this.props.index} name={this.props.val} type="button" className='btn btn-primary btn-xs  btn-block'> Edit </button>
					</div>
					<div className='clearfix'></div>
				</div>
			)
		}
		else{
			return(
				<form onSubmit={this.saveTask} >
					<div className='form-group col-md-10'>
						<textarea type="text" ref="editTask" className='form-control' defaultValue={this.props.val}></textarea>
					</div>
					<button  type="submit" className='btn btn-success'> Save </button>
					<div className='clearfix'></div>
				</form>
			)
		}
	}
})


ReactDOM.render(<App />, document.getElementById('app'));


