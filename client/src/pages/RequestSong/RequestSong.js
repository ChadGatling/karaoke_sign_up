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

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lng1, lat2, lng2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2-lat1);
  var dLng = degreesToRadians(lng2-lng1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLng/2) * Math.sin(dLng/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return earthRadiusKm * c;
}

class RequestSong extends Component {
	state = {
		username: "",
		firstName: "",
		song: "",
		artist: "",
		comment: "",
		locations: [],
		locationIndex: "",
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
		console.log("Input", name, value);
		this.setState({
			[name]: value
		})

		if (navigator.geolocation) {
            console.log("Getting location");
            navigator.geolocation.getCurrentPosition(this.checkPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
	};

	handleLocationChange = event => {
		const { name, value } = event.target;
		console.log("Input", name, value);
		this.setState({
			[name]: value
		},() => {
			console.log("locationIndex", this.state.locationIndex);

			this.getLocation()
		})
	};

	handleFormSubmit = event => {
		event.preventDefault();
 
	};

	// Function for getting the users location.
    getLocation = () => {
        if (navigator.geolocation) {
            console.log("Getting location");
            navigator.geolocation.getCurrentPosition(this.checkPosition); // Browser function to get locaion info then insert into the callback
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    // Function given to the getCurrentPosition function for what to do with the position info
    checkPosition = (position) => {

		
		// value of the selected location and the index of the location array
		const index = this.state.locationIndex
    	console.log("Index", index);
    	const lat1 = this.state.locations[index].lat;
    	const lat2 = position.coords.latitude;
    	const lng1 = this.state.locations[index].lng;
    	const lng2 = position.coords.longitude;

    	console.log("Distance", distanceInKmBetweenEarthCoordinates(lat1, lng1, lat2, lng2));
        
		// check whether the singer is at the location selected.
		if (distanceInKmBetweenEarthCoordinates(lat1, lng1, lat2, lng2) <= .250) {

			// save the singer and song to the database and list of singers
			API.saveSinger({
				name: this.state.firstName,
				song: this.state.song,
				artist: this.state.artist,
				comment: this.state.comment
			})
				.then(this.props.history.push("/singers"))
				.catch(err => console.log(err));
		} else {
			alert("Please make sure you are at the location you are signing up for.")
		}
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
				onChange={this.handleLocationChange}
				name="locationIndex"
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