import React, { Component } from "react";
import API from "../../utils/API";

class Nav extends Component {
	state = {

	};

	handleLogout = event => {
		event.preventDefault();

		API.logOut().then(this.props.history.push("/requestSong"));
	}

	render() {
		return(
			<div>
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
							<a href="/requestSong" className="navbar-brand">
								Request Song
							</a>
							<a href="/signUp" className="navbar-brand">
								Sign Up
							</a>
							<a href="/songs" className="navbar-brand">
								Song List
							</a>
							<a href="/locations" className="navbar-brand">
								Locations
							</a>
							<a className="navbar-brand" onClick={this.handleLogout}>
								Log Out
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;