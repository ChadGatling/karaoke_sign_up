import React, { Component } from "react";
import {/*Input,*/ FormBtn/*, Select*/} from "../../components/Form";
import Nav from "../../components/Nav";
import API from "../../utils/API";

var Style = {
  // width: "100%",
  // height: "700px",
  // backgroundSize: "cover",
  // backgroundPosition: "30%",
  // backgroundImage: "url(https://randolphsbilliards.com/wp-content/uploads/2016/05/Facebook-Event-Background.png)"
};

var margin = {
	margin: "0px 10px",
};

var center = {
	margin: "auto",
	width: "50%"
};

class Welcome extends Component {
	state = {
		username: "",
		access: ""
	};

	componentDidMount() {
		API.session()
			.then(res => {
				// console.log("res.data", res);
				if (res.data) {
					this.setState({
						...res.data
					});
				}
			});
	};

	handleSignUp = event => {
		event.preventDefault();

		this.props.history.push("/signup")
	};

	handleLogIn = event => {
		event.preventDefault();

		this.props.history.push("/login")
	}
			
	render() {
		return(
			<div style={ Style }>
				<Nav username={this.state.username}/>
				<h1>Welcome</h1>
				<p style={margin}>Ready to sing? Just sing up or sign in, request a song, and have a drink.</p>
				<div>
					{!this.state.username &&
						<form style={center}>
							<FormBtn onClick={this.handleSignUp}>
								Register
							</FormBtn>
							<FormBtn onClick={this.handleLogIn}>
								Log in
							</FormBtn>						
						</form>
					}
				</div>
				<hr/>
				<div style={margin}>
					<p>
						Karaoke-Sign-Up is intended to be an app for users to sign up to karaoke events from their table. At this point functionality exists for users to register, log in, request a song, and log out; as well as navigating pages and viewing the current list of singers.
					</p>
					<p>
						My intention is to allow users to pick from a list of available locations and confirm with gps data. There will be a separate area for use by the DJ himself were he can see the order of signups and confirm that a song is available. I am also interested in getting the location's songs so as to automatically confirm a song's availability. I would like to be able to determine if a user has left the location and automatically remove that user from the upcoming singers list.
					</p>
				</div>
				<hr/>
			</div>
		);
	}
}

export default Welcome;
