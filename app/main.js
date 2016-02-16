import React from 'react';
import ReactDOM from 'react-dom';
// import Note from './component.jsx';
import './styles.scss';



var App = React.createClass ({
	getInitialState(){
		return {
			todos: [],
		}
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
				<List todos={this.state.todos} />
				<form onSubmit={this.addTask} >
					<div className='form-group'>
						<textarea type="text" ref="task" className='form-control'></textarea>
					</div>
	                <button type="submit" className='btn btn-success pull-right'> Add Task </button>
	                <div className='clearfix'></div>
	            </form>
	        </div>
		)
	}
});

var List = React.createClass ({
	getInitialState(){
		return {
			act: ''
		}
	},
	deleteTask(e){
		e.preventDefault();
		let i = +e.target.value,
			key = this.props.todos.splice(i,1);
		this.setState({
	        todos: this.props.todos
	    });
	},
	editTask(e){
		e.preventDefault();
		this.setState({
	        act: 'blablabla',
	        index: +e.target.value,
	        text: e.target.name
	    });
	},
	saveTask(e){
		e.preventDefault();
		this.props.todos[this.state.index] = this.refs.editTask.value;
		this.setState({
	        act: '',
	        index: '',
	        text:''
	    });
	},
	render(){
		if (this.state.act !== "blablabla"){
			return(
				<div className='list edit-list'>
					<ul>{this.props.todos.map((item, i) =>
						<li key={i}>
							<span ref="text">{item}</span>
							<div className='buttons pull-right'>
								<button onClick={this.deleteTask} value={i} type="button" className='btn btn-danger btn-xs  btn-block'> Remove </button>
								<button onClick={this.editTask} value={i} name={item} type="button" className='btn btn-primary btn-xs  btn-block'> Edit </button>
							</div>
							<div className='clearfix'></div>
						</li>
					)}</ul>
				</div>
			)
		}
		else{
			return(
				<div className='list edit-list'>
					<form onSubmit={this.saveTask} >
						<div className='form-group col-md-10 col-xs-10'>
							<textarea type="text" ref="editTask" className='form-control' defaultValue={this.state.text}></textarea>
						</div>
						<button  type="submit" className='btn btn-success'> Save </button>
						<div className='clearfix'></div>
					</form>
				</div>
			)
		}
	}
})


ReactDOM.render(<App />, document.getElementById('app'));



