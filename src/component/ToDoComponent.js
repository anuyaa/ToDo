import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../style/ToDo.css';

export default class ToDoComponent extends Component {

	constructor() {
		super();
		this.state = { mode : 'display' };
	}

	buildEditBtn (editIconStyle){
		return (
			<span style={editIconStyle}>
				<i onClick={() => this.setState({mode : 'edit'})} className="fa-lg fa fa-pencil-square-o" aria-hidden="true"></i>
			</span>
		);
	}

	handleCancelEdit (){
		this.setState({mode : 'display'});
	}

	handleSave (aToDo){
		if( aToDo.title !== this.titleInput.value
			|| aToDo.description !== this.descInput.value
			|| aToDo.status !== this.statusInput.checked){
			aToDo.title = this.titleInput.value.trim();
			aToDo.description = this.descInput.value.trim();
			aToDo.status = this.statusInput.checked ? 'completed' : 'incomplete';

			this.props.handleEdit(aToDo);
			this.setState({mode : 'display'});
		}
	}

	buildEditToDo (aToDo) {
		const btnStyle = {
			float: 'right',
			margin: '2px'
		}

		const editDetailStyle = {
			border: '8px solid whitesmoke',
			padding: '5px 5px 10px'
		}
		return (
			<div className="form-group" style={editDetailStyle}>
				<input type="text" ref={(input) => { this.titleInput = input; }} defaultValue={aToDo.title} className="form-control"  placeholder='title' aria-describedby="basic-addon2" />
				<br/>
				<textarea className="form-control" ref={(input) => { this.descInput = input; }} defaultValue={aToDo.description} rows="3" id="comment" placeholder='description'></textarea>
				<label>
					<input type="checkbox" ref={(input) => { this.statusInput = input; }}  defaultChecked={aToDo.status === 'completed' ? 'checked' : null}/>
					{aToDo.status === 'completed' ? ' Unset' : ' Mark Completed '}
				</label>
				<button type="button" className="btn btn-outline-warning btn-sm" style={btnStyle} onClick={() => this.handleCancelEdit()}>Cancel</button>
				<button type="button" className="btn btn-outline-secondary btn-sm" style={btnStyle} onClick={() => this.handleSave(aToDo)}>Save</button>
			</div>
		);
	}

	goDisplayMode(aToDo) {
		const editIconStyle = {
			float: 'right',
			marginRight: '5px',
			marginLeft: '5px'
		};
		const showEditBtn = this.state.mode === 'display' ? this.buildEditBtn(editIconStyle) : null;

		/*<footer style={editIconStyle}><cite title="date">{aToDo.date}</cite></footer>*/
		return (
			<div key={aToDo.id} href="#" className="list-group-item">
				{aToDo.title}
				{showEditBtn}
			</div>
		);
	}

	render (){
		const todo = this.props.todo;
		let item = this.goDisplayMode(todo);

		return (
			<div>
				{item}
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
					transitionAppear={true}
					transitionAppearTimeout={500}>
					{ this.state.mode === 'edit' ? this.buildEditToDo(todo) : null}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

ToDoComponent.PropTypes = {
	todo: React.PropTypes.object.isRequired,
	handleEdit: React.PropTypes.func.isRequired
}
