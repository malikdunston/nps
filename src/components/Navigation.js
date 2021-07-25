import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navigation extends Component { 
constructor(props){
	super(props);
	this.state = {
		open: false,
		menu: [
			["home", "/"],
			["article", "/article"],
			["park", "/park/"]
		]
	}
	this.navClick = this.navClick.bind(this);
}
navClick(){
	this.setState(prevState=>{return {open: !prevState.open}})
}
render(){ return (
	<nav className="navbar navbar-dark">
		<div className="d-flex">
			<Link to="/" className="navbar-brand">
				<img src={this.props.logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
				<div className="navbar-title">NPS</div>
			</Link>
			<div className={"menu collapse navbar-collapse " + (this.state.open ? "show" : "")} >
				<ul className="nav ">
					{this.state.menu.map(m=>{
						return <li className="nav-item">
							<Link to={m[1]} className="nav-link">
								{m[0]}
							</Link>
						</li>
					})}
				</ul>
			</div>
			<button type="button" 
				className="navbar-toggler collapsed" 
				data-toggle="collapse" 
				onClick={this.navClick}>
				<span className="navbar-toggler-icon"></span>
			</button>
		</div>
	</nav>
) }
} export default  Navigation;