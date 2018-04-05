import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Locations from "./pages/Locations";
import SignUp from "./pages/SignUp";
import Singers from "./pages/Singers";
import Songs from "./pages/Songs";
import Welcome from "./pages/Welcome";
import RequestSong from "./pages/RequestSong";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Kj from "./pages/Kj";
import './App.css';

/*var Style = {
  width: "100%",
  height: "700px",
  backgroundImage: "url(https://randolphsbilliards.com/wp-content/uploads/2016/05/Facebook-Event-Background.png)"
};*/

const windowHeight = {
	height: "100vh"
};

class App extends Component {
	state = {
		username: ""
	};

	render() {
		return (
			<div style={windowHeight}>
				<Router>
					<div>
						<Switch /> 
							<Route exact path="/" component={Welcome} />
							<Route exact path="/requestSong" component={RequestSong} />
							<Route exact path="/signUp" component={SignUp} />
							<Route exact path="/LogIn" component={LogIn} />
							<Route exact path="/singers" component={Singers} />
							<Route exact path="/songs" component={Songs} />
							<Route exact path="/locations" component={Locations} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/kj" component={Kj} />
					</div>
				</Router>
					<footer className="footer">
						<div className="two-toned-footer-color"></div>
						<p className="text-muted text-muted-footer text-center">
							&copy; Copyright 2018 Elliott Wendel
						</p>
					</footer>
			</div>
		);
	}
}

export default App;
