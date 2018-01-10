import React, { Component } from "react";
import API from "../../utils/API";

class Singers extends Component {
	state = {
		name: "name",
		songName: "",
		songArtist: ""
	};

	componentDidMount() {
		this.loadSingers();
	}

	loadSingers = () => {
		API.getUsers()
			.then(res => {
				console.log(res.data);
				this.setState({ /*name: res.data.name, songName: "", songArtist: "" */})
				})
			.catch(err => console.log(err))
	};

	render() {
		return (
			<div>
				<h1>Singers</h1>
				{this.state.name}
			</div>
		);
	}
}

export default Singers;