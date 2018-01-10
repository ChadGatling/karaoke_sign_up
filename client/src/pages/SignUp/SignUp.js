import React, { Component } from "react";
import {Input, FormBtn} from "../../components/Form";

class SignUp extends Component {

	render() {
		return(
			<div>
				<form>
					<h1>Sign Up</h1>
					<Input placeholder="Singer name" />
					<Input placeholder="Song Title" />
					<Input placeholder="Artist/Version" />
					<FormBtn children="Request song" />
				</form>
			</div>
		);
	}
}

export default SignUp;