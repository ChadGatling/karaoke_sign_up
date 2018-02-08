import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";

class Kj extends Component {
	state = {
		singers: [],
		username: "",
		location: "Ego's",
		access: ""
	};

	componentDidMount() {
		API.session()
			.then(res => {
				console.log("res.data", res);
				if (res.data) {
					this.setState({
						username: res.data.username,
						firstName: res.data.firstName,
						access: res.data.access
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
				<h1>Welcome KJ {this.state.username}</h1>
				<div>
				</div>
			</div>
		);
	}
}

export default Kj;