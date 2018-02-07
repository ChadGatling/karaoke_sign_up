import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";

class Singers extends Component {
	state = {
		singers: [],
		username: "",
		location: "Ego's"
	};

	componentDidMount() {
		API.session()
			.then(res => {
				console.log("res.data", res);
				if (res.data) {
					this.setState({
						username: res.data.username,
						firstName: res.data.firstName
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
				<Nav username={this.state.username}/>
				<h1>Singers at {this.state.location}</h1>
				<div>
					<List>
						{!this.state.singers && <span>Loading Singers</span>}
						{this.state.singers.map(singer => (
							<ListItem key={singer._id}>
								{singer.name} singing {singer.song} by {singer.artist}
							</ListItem>
						))}
					</List>
				</div>
			</div>
		);
	}
}

export default Singers;