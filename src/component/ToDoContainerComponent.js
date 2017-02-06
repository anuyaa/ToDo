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
			searched: []
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

	handleAdd (){

	}

	render () {
		let list = this.state.searched.length === 0 ? this.state.todos : this.state.searched ;

		return (
			<div>
				<ToDoSearch handleSearch={this.handleSearch} />
				<ToDoList todos={list} handleEdit={this.handleEdit} />
				<div className="row">
					<span className="add-todo" onClick={this.handleAdd}>
						<i className="fa-lg fa fa-plus-circle" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		);
	}
}