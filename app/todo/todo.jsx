import React from 'react';
import './todo.scss';


var todos = [];

module.exports = React.createClass ({
	getInitialState(){
		return {
			todos: todos,
			err: null
		}
	},
	addTask(e){
		e.preventDefault();
		if(this.refs.task.value.length > 5){
			this.setState({
				todos: this.state.todos.concat([this.refs.task.value]),
				err: null,
			});
			this.refs.task.value = '';
			this.refs.task.className = 'form-control'
		}
		else{
			this.refs.task.className = 'form-control error';
			this.setState({
				err: "Text can't be less 6 symbols",
			});
		}
	},
	render(){
		return(
			<div className='todo'>
				<h2>Todo List</h2>
				<TaskList todos={this.state.todos}/>
				<form onSubmit={this.addTask} >
					<div className='form-group'>
						<textarea type="text" ref="task" className='form-control'></textarea>
						<span className='error-description'>{this.state.err}</span>
					</div>
					<button type="submit" className='btn btn-success pull-right'> Add Task </button>
					<div className='clearfix'></div>
				</form>
			</div>
		)
	}
});

var TaskList = React.createClass ({
	deleteTask(e){
		e.preventDefault();
		let i = +e.target.value,
			key = this.props.todos.splice(i,1);
		this.setState({
			todos: this.props.todos
		});
	},
	render(){
		if (this.props.todos.length > 0){
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
		else{
			return(
				<div className='list none-list'>
					<p className='bg-warning'>Please enter task</p>
				</div>
			)
		}

	}
})

const Task = React.createClass({
	getInitialState(){
		return {
			act: '',
			err: null
		}
	},

	editTask(e){
		e.preventDefault();
		this.setState({
			act: 'edit',
		});
	},
	saveTask(e){
		e.preventDefault();
		if(this.refs.editTask.value.length > 5){
			this.props.todos[this.props.index] = this.refs.editTask.value;
			this.setState({
				act: '',
				err: null,
			});
			this.refs.editTask.className='form-control'
		}
		else{
			this.refs.editTask.className='form-control error'
			this.setState({
				err: "Text can't be less 6 symbols",
			});
		}

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
						<span className='error-description'>{this.state.err}</span>
					</div>
					<button  type="submit" className='btn btn-success'> Save </button>
					<div className='clearfix'></div>
				</form>
			)
		}
	}
})
