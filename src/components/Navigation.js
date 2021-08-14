import React, { Component } from "react";
import {Link} from "react-router-dom";
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg";
import {ReactComponent as MenuOpen} from "../assets/icons/menu_open.svg";

class Navigation extends Component { 
constructor(props){
	super(props);
	this.state = {
		open: false,
		menu: [
			// ["home", "/"],
			// ["article", "/article"],
			// ["park", "/park/"]
		]
	}
	this.navClick = this.navClick.bind(this);
}
navClick(){
	this.setState(prevState=>{return {open: !prevState.open}})
}
render(){ return (
	<nav>
		<div className="nav-top">
			<Link to="/" className="logo">
				<img src={this.props.logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
				<div>NPS</div>
			</Link>
			<button type="button" className="search" onClick={this.navClick}>
				<SearchIcon />
			</button>
			<button type="button" onClick={this.navClick}>
				<MenuOpen />
			</button>
		</div>
		<div className="nav-bottom">
			{this.state.menu.length ? <div className={"menu " + (this.state.open ? "show" : "")} >
				<ul>
					{this.state.menu.map(m=>{
						return <li className="">
							<Link to={m[1]} className="">
								{m[0]}
							</Link>
						</li>
					})}
				</ul>
			</div> : ""}
		</div>
	</nav>
) }
} export default Navigation;