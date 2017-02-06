import React, { Component } from 'react';
//import logo from './logo.svg';
import '../style/App.css';
import EventCard from './EventCard';
import ToDoComponent from './ToDoContainerComponent';

class App extends Component {
  // <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span className="App-header-icons">
            <span className="App-user-logo">
              <i className="fa fa-lg fa-user-circle" aria-hidden="true"></i>
            </span>
          </span>
        </div>
				<br/>
				<div className="container">
					<ToDoComponent/>
				</div>
        <div className="App-intro">
          <div className="App-event-list">
            <EventCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
