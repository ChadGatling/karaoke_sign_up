import React, { Component } from "react";
import {Input, FormBtn/*, Select*/} from "../../components/Form";
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
		location: ""
	};

	componentDidMount() {
		API.session()
			.then(res => {
				// console.log("res.data", res);
				if (res.data) {
					this.setState({
						username: res.data.username,
						firstName: res.data.firstName
					});
					console.log("RequestSong username", this.state.username);
				}
			});
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
			<Nav username={this.state.username}/>
			<h1>Request Song</h1>
			{this.state.username}
			<form>
			{/*Song*/}
				<Input
				placeholder="Song"
				onChange={this.handleInputChange}
				name="song"
				/>
			{/*Artist*/}
				<Input
				placeholder="Artist"
				onChange={this.handleInputChange}
				name="artist"
				/>
			{/*comment*/}
				<Input
				placeholder="Comment/Clarification (optional)"
				onChange={this.handleInputChange}
				name="comment"
				/>
			{/*location*/}
			{/*submit*/}
				<FormBtn onClick={this.handleFormSubmit}>
					Request Song
				</FormBtn>
			</form>
		</div>
		)
	}
}

export default RequestSong;