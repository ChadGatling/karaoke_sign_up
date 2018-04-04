import React, { Component } from "react";
import API from "../../utils/API";
// import { List, ListItem } from "../../components/List";
import {Input, FormBtn/*, Select*/} from "../../components/Form";
import Nav from "../../components/Nav";

var margin = {
	margin: "0px 10px",
};

class Dashboard extends Component {
	state = {
		username: "",
		firstName: "",
		lastName: "",
		nickname: "",
		access: "",
		edit: false,
		firstNameEdit: "",
		lastNameEdit: "",
		nicknameEdit: "",
		delete: false

	};

	componentDidMount() {
		API.session()
			.then(res => {
				console.log("res.data", res);
				if (res.data) {
					this.setState({
						...res.data
					});
				}else {
					this.props.history.push("/")
				}
			});
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	handleEditClick = event => {
		event.preventDefault();

		this.setState(prevState => ({
			edit: !prevState.edit
		}))
	};

	handleDeleteClick = event => {
		event.preventDefault();

		this.setState(prevState => ({
			delete: !prevState.delete
		}))
	};

	handleUpdateUser = event => {
		event.preventDefault();

		API.updateUser({
			firstName: this.state.firstNameEdit || this.state.firstName,
			lastName: this.state.lastNameEdit || this.state.lastName,
			nickname: this.state.nicknameEdit || this.state.nickname
		}).then(
			API.session()
				.then(res => {
					console.log("res.data", res);
					if (res.data) {
						this.setState({
							...res.data
						});
					}else {
						this.props.history.push("/")
					}
				}).then(this.setState({edit: false})));
	};

	handleDeleteUser = event => {
		event.preventDefault();

		API.deleteUser(this.state.username)
			.then(this.props.history.push("/"))
	};

	render() {
		return (
			<div>
				<Nav {...this.state}/>
				<h1>Hello {this.state.firstName}</h1>
				<div style={margin}>
					<div>
						Username: {this.state.username}
					</div>
					<div>
						Name: {this.state.firstName} {this.state.nickname && '"'}{this.state.nickname}{this.state.nickname && '"'} {this.state.lastName}
					</div>
					<div>
						Access level: {this.state.access}
					</div>
					<br/>
					<FormBtn onClick={this.handleEditClick}>Edit Info</FormBtn>
					{this.state.edit &&
						<div>
							<hr/>
							<p>Please fill in the info you want to change and submit. Anything left blank will be unchanged.</p>
							<form action="">
								<Input 
								placeholder="First name" 
								onChange={this.handleInputChange}
								name="firstNameEdit"
								type="text"
								/>
								<Input 
								placeholder="Last name" 
								onChange={this.handleInputChange}
								name="lastNameEdit"
								type="text"
								/>
								<Input 
								placeholder="Nickname" 
								onChange={this.handleInputChange}
								name="nicknameEdit"
								type="text"
								/>
								<FormBtn onClick={this.handleUpdateUser}>Save Changes</FormBtn>
							</form>
						</div>
					}
					<hr/>
					<FormBtn onClick={this.handleDeleteClick}>Delete Account</FormBtn>
					{this.state.delete &&
						<div>
							<hr/>
							<p>Are you sure you want to delete your account? This will wipe your user info from the database.</p>
							<FormBtn onClick={this.handleDeleteUser} className="btn btn-danger">Confirm Delete</FormBtn>
						</div>
					}
					{this.state.access === "admin" &&
						<form action="">
							<hr/>
							<FormBtn>
								Add KJ
							</FormBtn>
							<br/>
							<FormBtn>
								Add Location
							</FormBtn>
						</form>
					}
				</div>
				<hr/>
			</div>
		);
	}
}

export default Dashboard;