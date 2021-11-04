import React, { Component } from 'react'
import { Route, Link, withRouter } from "react-router-dom";

export default class Navigation extends Component {
	render() {
		return (
			<div>
				Nav
				<Link to={"/"}>Home</Link>
				<Link to={"/search"}>Search</Link>
			</div>
		)
	}
}
