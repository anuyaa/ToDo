import React, { Component } from 'react';

export default class EventCard extends Component {

	render () {
		return (<div className="App-event-card">
			<div className="App-event-img">
				<span className="App-event-name">Event
					<span className="App-event-loc">
						<i className="fa fa-map-marker" aria-hidden="true"></i>
					</span>
				</span>
				<span className="App-event-details">
					Event details and now it is time to rock on!!!
				</span>
				<span className="App-event-actions">
					<span className="App-event-buy">
						button
					</span>
					<span className="App-event-rate">
						<i className="fa fa-star-o" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
					</span>
				</span>
			</div>
		</div>);
	}
}
