import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";

var Style = {
	color: "white"
    // backgroundImage: "url(https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/karaoke-background_GJWDxYBO_SB_PM.jpg)"
};

class Nav extends Component {
	state = {
		username: "",
		firstName: "",
		song: "",
		artist: "",
		comment: "",
		location: ""
	};

	componentDidMount() {
	};

	handleLogout = event => {
		event.preventDefault();

		API.logOut()
			.then(
				this.props.history.push("/")
			);
	};

	render() {
		return(
			<div style={ Style }>
				<nav className="navbar navbar-inverse navbar-top">
					<div className="container-fluid">
						<div className="navbar-header">
							{/*<button type="button" className="collapsed navbar-toggle">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar" /> <span className="icon-bar" />
								<span className="icon-bar" />
							</button>*/}
							<a href="/singers" className="navbar-brand">
								Singers
							</a>
							{this.props.username &&
								<a href="/requestSong" className="navbar-brand">
									Request Song
								</a>
							}
							{this.props.username &&
								<a href="/dashboard" className="navbar-brand">
									Dashboard
								</a>
							}
							{this.props.access === "admin" || this.props.access === "kj" &&
								<a href="/kj" className="navbar-brand">
									KJ
								</a>
							}
							{!this.props.username &&
								<a href="/signUp" className="navbar-brand">
								Sign Up
								</a>
							}
							{!this.props.username &&
								<a href="/logIn" className="navbar-brand">
								Log In
								</a>
							}
							{/*<a href="/songs" className="navbar-brand">
								Song List
							</a>*/}
							{/*<a href="/locations" className="navbar-brand">
								Locations
							</a>*/}
							{this.props.username &&
								<a href="" className="navbar-brand" onClick={this.handleLogout}>
									Log Out
								</a>
							}
							<div>{this.props.username || "Please log in."}</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Nav);