import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as MenuOpen } from "../assets/icons/menu_open.svg";
import { ReactComponent as MenuClose } from "../assets/icons/menu_close.svg";
import Search from "./Search";
export default function Navigation ( { logo } ) {
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
				<img src={ logo } width="30" height="30" className="d-inline-block align-top" alt="National Parks Service Logo"/>
				<div>NPS</div>
			</Link>
			<Search navOpen={open} />
			<div className="button" onClick={toggle}> { open ? <MenuClose /> : <MenuOpen /> } </div>
		</div>
		<div className="nav-bottom" style={{
			height: open ? "100vh" : "0px",
		}}>
			{menu ? <div className={"menu " + (open ? "show" : "")} >
				<ul> { menu.map( (m, i) => <li key={i}><Link to={m[1]}>{m[0]}</Link></li> ) } </ul>
			</div> : ""}
			<div className="footer">
				Experience Your America
				National Parks Service
				U.S. Department of the Interior
			</div>
		</div>
	</nav>
}