import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Locations from "./pages/Locations";
import SignUp from "./pages/SignUp";
import Singers from "./pages/Singers";
import Songs from "./pages/Songs";
import Welcome from "./pages/Welcome";
import RequestSong from "./pages/RequestSong";
import LogIn from "./pages/LogIn";
import './App.css';

/*var Style = {
  width: "100%",
  height: "700px",
  backgroundImage: "url(https://randolphsbilliards.com/wp-content/uploads/2016/05/Facebook-Event-Background.png)"
};*/

class App extends Component {
	state = {
		username: ""
	};

	render() {
		return (
			<div>
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
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
