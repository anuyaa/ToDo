import React, {Component} from 'react';
import ToDoSearch from './ToDoSearch';
import ToDoList from './ToDoList';

export default class ToDo extends Component {

	constructor (){
		super();
		this.handleSearch = this.handleSearch.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.state =  {
			todos :
				[
					{
						id:1,
						title: 'Do your dishes',
						description: 'Do it now',
						date: Date.now(),
						status: 'incomplete',
						dependency: []
					},
					{
						id:2,
						title: 'read newspaper',
						description: 'at 3 pm',
						date: Date.now(),
						status: 'incomplete',
						dependency: []
					},
					{
						id:3,
						title: 'finish laundry by sunday',
						description: 'on sunday',
						date: Date.now(),
						status: 'incomplete',
						dependency: []
					}
				]
			,
			searched: [],
			operation : ''
		}
	}

	handleSearch (query) {
		if(!query){
			this.setState ({	searched : [] });
			return;
		}

		const searchResults = this.state.todos.filter((aToDo) => {
			return aToDo.title.toLowerCase() === query;
		});
		this.setState ({	searched : searchResults });
	}

	handleEdit (todo) {
		const newToDos = this.state.todos.map((elem) => {
			return elem === todo.id ? todo : elem;
		});

		this.setState({todos : newToDos });
	}

	// START - ADD state Handler and View functions
	handleCancelAdd (){
		this.setState({operation : ''});
	}

	handleAdd () {
		const newToDO = {
			id: 4,
			title: this.titleInput.value.trim(),
			description: this.descInput.value.trim(),
			date: Date.now(),
			status: this.statusInput.checked ? 'Completed' : 'Incomplete',
			dependency: []
		};

		this.setState((prevState, props) => {
			return {todos: prevState.todos.concat(newToDO) , operation : ''};
		});
	}

	buildAddToDo () {

		const btnStyle = {
			float: 'right',
			margin: '2px'
		}

		const editDetailStyle = {
			border: '8px solid whitesmoke',
			padding: '5px 5px 40px 5px'
		}

		const statusStyle = {
			float: 'left',
			margin: '2px'
		}

		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<div className="form-group" style={editDetailStyle}>
						<input type="text" ref={(input) => { this.titleInput = input; }} className="form-control"  placeholder='title' aria-describedby="basic-addon2" />
						<br/>
						<textarea className="form-control" ref={(input) => { this.descInput = input; }} rows="3" id="comment" placeholder='description'></textarea>
						<label style={statusStyle}>
							<input type="checkbox" ref={(input) => { this.statusInput = input; }} /> Mark Completed
						</label>
						<button type="button" className="btn btn-outline-warning btn-sm" style={btnStyle} onClick={() => this.handleCancelAdd()}>Cancel</button>
						<button type="button" className="btn btn-outline-secondary btn-sm" style={btnStyle} onClick={() => this.handleAdd()}>Add</button>
					</div>
				</div>
			</div>
		);
	}

	onAdd (){
		this.setState({operation : 'add'});
	}
	// END OF - ADD state Handler and View functions

	render () {
		let list = this.state.searched.length === 0 ? this.state.todos : this.state.searched ;
		const addComponent = this.state.operation === 'add' ? this.buildAddToDo() : null ;
		return (
			<div>
				<ToDoSearch handleSearch={this.handleSearch} />
				{addComponent}
				<ToDoList todos={list} handleEdit={this.handleEdit}/>
				<div className="row">
					<span className="add-todo" onClick={() => this.onAdd()}>
						<i className="fa-lg fa fa-plus-circle" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		);
	}
}
