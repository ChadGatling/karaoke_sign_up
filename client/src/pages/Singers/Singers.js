import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Singers extends Component {
	state = {
		singers: []
	};

	componentDidMount() {
		this.loadSingers();
	}

	loadSingers = () => {
		API.getSingers()
			.then(res => {
				this.setState({ singers: res.data})
				})
			.catch(err => console.log(err))
	};

	render() {
		return (
			<div>
				<h1>Singers</h1>
				<div>
					<List>
						{this.state.singers.map(singer => (
							<ListItem key={singer._id}>
								{singer.name} singing	{singer.song} by {singer.artist}
							</ListItem>
						))}
					</List>
				</div>
			</div>
		);
	}
}

export default Singers;