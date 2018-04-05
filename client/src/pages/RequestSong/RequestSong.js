import React, { Component } from "react";
import {Input, FormBtn, Select} from "../../components/Form";
import Nav from "../../components/Nav";
import API from "../../utils/API";

var Style = {
  // width: "100%",
  // height: "700px",
  // backgroundSize: "cover",
  // backgroundPosition: "8%",
  // backgroundImage: "url(https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/karaoke-background_GJWDxYBO_SB_PM.jpg)"
};

class RequestSong extends Component {
	state = {
		username: "",
		firstName: "",
		song: "",
		artist: "",
		comment: "",
		locations: [],
		access: ""
	};

	componentDidMount() {
		// Get user info from session on server then get the locations from the database and set them in state.
		API.session()
			.then(res => {
				// console.log("res.data", res);
				if (res.data) {
					this.setState({
						...res.data
					});
				}else {
					this.props.history.push("/")
				}
			}).then(API.listLocations().then(res => {
			console.log("Locations", res);			
				this.setState({
					locations: res.data
				})
				console.log("State", this.state);
			})
		)
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	handleFormSubmit = event => {
		event.preventDefault();

		API.saveSinger({
			name: this.state.firstName,
			song: this.state.song,
			artist: this.state.artist,
			location: "Ego's",
			comment: this.state.comment,
		})
		.then(this.props.history.push("/singers"))
		.catch(err => console.log(err));
	};

	render() {
		return(
		<div style={ Style }>
			<Nav {...this.state}/>
			<h1>Request Song</h1>
			<form onSubmit={this.handleFormSubmit}>
			{/*location*/}
				<Select
				autoFocus
				onChange={this.handleInputChange}
				name="location"
				locations= {this.state.locations.map(location => {return location.name})}
				required
				/>
			{/*Song*/}
				<Input
				placeholder="Song"
				onChange={this.handleInputChange}
				name="song"
				required
				/>
			{/*Artist*/}
				<Input
				placeholder="Artist"
				onChange={this.handleInputChange}
				name="artist"
				required
				/>
			{/*comment*/}
				<Input
				placeholder="Comment/Clarification (optional)"
				onChange={this.handleInputChange}
				name="comment"
				/>
			{/*submit*/}
				<FormBtn type="submit">
					Request Song
				</FormBtn>
			</form>
			<hr/>
		</div>
		)
	}
}

export default RequestSong;