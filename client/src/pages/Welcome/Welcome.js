import React, { Component } from "react";
import {/*Input,*/ FormBtn/*, Select*/} from "../../components/Form";
import Nav from "../../components/Nav";

var Style = {
  // width: "100%",
  // height: "700px",
  // backgroundSize: "cover",
  // backgroundPosition: "30%",
  // backgroundImage: "url(https://randolphsbilliards.com/wp-content/uploads/2016/05/Facebook-Event-Background.png)"
};

class Welcome extends Component {
	state = {

	};

	handleSignUp = event => {
		event.preventDefault();

		this.props.history.push("/signup")
	}

	handleLogIn = event => {
		event.preventDefault();

		this.props.history.push("/login")
	}
			
	render() {
		return(
			<div style={ Style }>
				<Nav />
				<h1>Welcome</h1>
				<p>Ready to sing? Just sing up or sign in, request a song, and have a drink.</p>
				<div>
					<form>
						<FormBtn onClick={this.handleSignUp}>
							Register
						</FormBtn>
						<FormBtn onClick={this.handleLogIn}>
							Log in
						</FormBtn>						
					</form>
				</div>
			</div>
		);
	}
}

export default Welcome;
