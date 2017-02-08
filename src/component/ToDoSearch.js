import React, {Component} from 'react';

export default class ToDoSearch extends Component {

	constructor(props) {
	 	super(props);
	 	this.search = this.search.bind(this);
	}

	search (){
		const query = this.query.value;
		if(!query)
			this.query.focus();
		this.props.handleSearch(query.trim());
	}

	//TODO = replace ref with better way
	render () {
		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<div className="input-group">
						<input type="text" className="form-control" ref={(input) => {this.query = input}} placeholder="Search for..." />
						<span className="input-group-btn">
							<button className="btn btn-secondary" type="button" onClick={ this.search }>Search</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

ToDoSearch.propTypes = {
	handleSearch: React.PropTypes.func.isRequired
};