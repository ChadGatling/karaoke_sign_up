import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Locations from "./pages/Locations";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Singers from "./pages/Singers";
import Songs from "./pages/Songs";
import Welcome from "./pages/Welcome";
import RequestSong from "./pages/RequestSong";
import './App.css';

class App extends Component {
	state = {
		username: "testUsername"
	};

	render() {
		return (
			<div>
				Username: {this.state.username}
				<Router>
					<div>
						<Nav />
						<Switch />
							<Route exact path="/" component={Welcome} />
							<Route exact path="/requestSong" component={RequestSong} />
							<Route exact path="/signUp" component={SignUp} />
							<Route exact path="/singers" component={Singers} />
							<Route exact path="/songs" component={Songs} />
							<Route exact path="/locations" component={Locations} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
