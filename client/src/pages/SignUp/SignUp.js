import React, { Component } from "react";
import {Input, FormBtn/*, Select*/} from "../../components/Form";
import API from "../../utils/API";
// import { Redirect } from "react-router";


const colorRed = {color: "red"};

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



	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	handleSignUp = event => {
		event.preventDefault();

		if (this.state.password === this.state.passwordMatch) {
			if (this.state.username && this.state.firstName && this.state.lastName && this.state.password && this.state.passwordMatch) {
				API.getUser(this.state.username).then(res => { // change to getUser and pass if null					

					if (res.data) {
						alert("Sorry that username is already taken.");
					}else {
						console.log("Creating", this.state.username);
						API.saveUser({
							username: this.state.username,
							firstName: this.state.firstName,
							lastName: this.state.lastName,
							nickname: this.state.nickname,
							password: this.state.password
						})
						.then(response => {
							this.setState({userId: response})
						})
						.then(this.props.history.push("/requestSong"))
						.catch(err => console.log(err));
					}
				})
			}else {
				alert("All boxes are required except Nickname");
			}
		}else {
			alert("Password retype must match password.");
		}
	};
 
	handleLogIn = (event) => {
		event.preventDefault();

		API.logIn(this.state.username)
	}

	componentDidMount() {

	}
 
	render() {
		return(
			<div>
				<h1>Sign Up</h1>
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
				{/*first name*/}
					<Input 
					placeholder="First name (Sign up only)" 
					onChange={this.handleInputChange}
					name="firstName"
					type="text"
					required
					/>
				{/*last name*/}
					<Input 
					placeholder="Last name (Sign up only)"
					onChange={this.handleInputChange}
					name="lastName"
					type="text"
					required
					/>
				{/*nickname*/}
					<Input 
					placeholder="Nickname (Sign up only)"
					onChange={this.handleInputChange}
					name="nickname"
					type="text"
					required
					/>
				{/*password*/}
					<span style={colorRed}>
						*DO NOT USE A REAL PASSWORD JUST MAKE UP SOMETHING STUPID*
					</span>
					<Input 
					placeholder="Password (Insecure! do not use a real password)"
					onChange={this.handleInputChange}
					name="password"
					type="password"
					required
					/>
				{/*password match*/}
					<span style={colorRed}>
						*AAAAAAHHHHH!!!! DO NOT USE A REAL PASSWORD, DAMN HOW MANY TIME DO I HAVE TO TELL YOU!?*
					</span>
					<Input 
					placeholder="Retype password (Do people still do this?)"
					onChange={this.handleInputChange}
					name="passwordMatch"
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
					<FormBtn onClick={this.handleSignUp}>
						Sign Up
					</FormBtn>
					<FormBtn onClick={this.handleLogIn}>
						Sign In
					</FormBtn>
				</form>
			</div>
		);
	}
}

export default SignUp;