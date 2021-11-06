import React, { useState } from 'react'
import { Route, Link, withRouter } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as MenuOpen } from "../assets/icons/menu_open.svg";
import Search from "./Search";
export default function Navigation ( props ) {
	const [ open, setOpen ] = useState(false);
	const [ menu, setMenu ] = useState([
		["Home", "/"],
		["Parks", "/parks/all"],
		["News", "/news"],
		["Search", "/search"]
	]);
	const toggle = e => {
		setOpen(!open)
	}
	return <nav>
		<div className="nav-top">
			<Link to="/" className="logo">
				<img src={props.logo} width="30" height="30" className="d-inline-block align-top" alt="National Parks Service Logo"/>
				<div>NPS</div>
			</Link>
			<Search />
			<div className="button" onClick={toggle}>
				<MenuOpen />
			</div>
		</div>
		<div className="nav-bottom">
			{menu ? <div className={"menu " + (open ? "show" : "")} >
				<ul> { menu.map( m => <li><Link to={m[1]}>{m[0]}</Link></li> ) } </ul>
			</div> : ""}
			<div className="footer">
				Experience Your America
				National Parks Service
				U.S. Department of the Interior
			</div>
		</div>
	</nav>
}