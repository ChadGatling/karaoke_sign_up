import React, { Component } from "react";
import {Input, FormBtn/*, Select*/} from "../../components/Form";
import { Redirect } from "react-router";
import API from "../../utils/API";

class RequestSong extends Component {
	state = {
		username: "",
		song: "",
		artist: "",
		comment: "",
		location: "",
		submitted: false
	};

	componentDidMount() {
		API.session()
			.then(res => {
				console.log("res.data", res);
				if (res.data) {
					this.setState({
						username: res.data.username
					});
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
			name: this.state.username,
			song: this.state.song,
			artist: this.state.artist,
			location: "Ego's",
			comment: this.state.comment,
		})
		// .then(this.setstate({submitted: true}))
		.catch(err => console.log(err));
	};

	render() {
		return(
		<div>
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
			{/*redirect*/}
				{this.state.submitted && <Redirect to="/singers" />}
			</form>
		</div>
		)
	}
}

export default RequestSong;