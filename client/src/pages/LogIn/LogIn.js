import React, { Component } from "react";
import {Input, FormBtn/*, Select*/} from "../../components/Form";
import Nav from "../../components/Nav";
import API from "../../utils/API";
// import { Redirect } from "react-router";

var Style = {
  // width: "100%",
  // height: "700px",
  // backgroundSize: "cover",
  // backgroundPosition: "8%",
  // backgroundImage: "url(https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/karaoke-background_GJWDxYBO_SB_PM.jpg)"
};

class SignUp extends Component {
	state = {
		username: "",
		firstName: "",
		lastName: "",
		nickname: "",
		passwordMatch: "",
		locations: [],
		submitted: false
	};
	componentDidMount() {

	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};
 
	handleLogIn = (event) => {
		event.preventDefault();
		if (this.state.username && this.state.password) {
				API.logIn({
					username: this.state.username,
					password: this.state.password
				}).then(response => {
					// console.log("response", response);
					if (response.data === "success") {
						this.props.history.push("/requestSong")

					}else if (response.data === "fail") {
						alert("Username or password does not match.")
					}else {
						alert("oh boy something went wrong.")
					}
				}
			)
		}else {
			alert("Both username and password required to sign in.")
		}
	}
 
	render() {
		return(
			<div style={ Style }>
				<Nav />
				<h1>Log In</h1>
				{/*<span>{this.state.username}</span>*/}
				<form>
				{/*Username*/}
					<Input 
					placeholder="Username" 
					onChange={this.handleInputChange}
					name="username"
					type="text"
					required
					/>
				{/*password*/}
					<Input 
					placeholder="Password"
					onChange={this.handleInputChange}
					name="password"
					type="password"
					required
					/>{/*
					<Select
					onChange={this.handleInputChange}
					name="location"
					defaultValue="Location"
					children={this.state.locations}
					required
					>						
					</Select>*/}
					<FormBtn onClick={this.handleLogIn}>
						Sign In
					</FormBtn>
				</form>
				<hr/>
			</div>
		);
	}
}

export default SignUp;