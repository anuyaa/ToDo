import React, {Component} from 'react';
import ToDoComponent from './ToDoComponent';


export default class ToDoList extends Component {

	buildAToDo (aToDo){
		const aToDoStyle = {
			textAlign: 'justify'
		};
		return (
			<div key={aToDo.id} style={aToDoStyle}>
				<br/>
				<ToDoComponent todo={aToDo} handleEdit={this.props.handleEdit}/>
			</div>
		);
	}

	buildToDos (todos) {
		console.log('build  todos: ', todos);
		return (
			<div className="col-sm-6 col-sm-offset-3">
				<div className="list-group">
					{ todos.map((aToDo) => this.buildAToDo(aToDo))  }
				</div>
			</div>
		);
	}

	render () {
		console.log('list component: ', this.props.todos);
		const allToDos = this.buildToDos(this.props.todos);
		return (
			<div className="row">
				{allToDos}
			</div>
		);
	}
}

ToDoList.PropTypes = {
	todos: React.PropTypes.array.isRequired,
	handleEdit: React.PropTypes.func.isRequired
}