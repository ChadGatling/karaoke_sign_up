import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import {/*Input,*/ FormBtn/*, Select*/} from "../../components/Form";
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
		access: ""
	};

	componentDidMount() {
		API.session()
			.then(res => {
				console.log("res.data", res);
				if (res.data) {
					this.setState({
						...res.data
					});
				}
			}).then(this.loadSingers());
	}

	loadSingers = () => {
		API.getSingers()
			.then(res => {
				this.setState({ singers: res.data })
				})
			.catch(err => console.log(err))
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
					<hr/>
					{this.state.access === "admin" &&
						<form action="">
							<FormBtn>
								Add JK
							</FormBtn>
							<br/>
							<FormBtn>
								Add Location
							</FormBtn>
						</form>
					}
				</div>
			</div>
		);
	}
}

export default Dashboard;