import React, { Component } from "react";
import {Link} from "react-router-dom";

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
	<nav className="">
		<Link to="/" className="navbar-brand">
			<img src={this.props.logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
			<div>NPS</div>
		</Link>
		<button type="button" className="search" onClick={this.navClick}>🔎︎</button>
		<button type="button" onClick={this.navClick}>☰</button>
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
	</nav>
) }
} export default  Navigation;