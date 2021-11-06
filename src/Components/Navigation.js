import React, { useState } from 'react'
import { Route, Link, withRouter } from "react-router-dom";
export default function Navigation ( props ) {
	return <div>
		Nav
		<Link to={"/"}>Home</Link>
		<Link to={"/parks/all"}>All Parks</Link>
		<Link to={"/news"}>News</Link>
		<Link to={"/search"}>Search</Link>
	</div>
}
