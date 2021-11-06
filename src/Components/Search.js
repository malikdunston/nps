import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as MenuClose } from "../assets/icons/menu_close.svg";
export default function Search ( { navOpen } ) {
	const [ open, setOpen ] = useState(false);
	const [ valid, setValidity ] = useState(false);
	const [ q, setQ ] = useState(null);
	const update = e => {
		let len = 3;
		setQ(e.target.value);
		setValidity(e.target.value.length >= len ? true : false);
	}
	const send = e => {
		window.location.href = `${process.env.PUBLIC_URL}/search/all/${q}`; 
	}
	const toggle = e => {
		e.currentTarget.parentNode.querySelector("input").select();
		setOpen(!open);
	}
	return <div className={`search ${open ? "open" : ""}`} style={{display: navOpen ? "none" : "flex"}}>
		<input type="text" onChange={update} style={{
			width: open ? "calc(100vw + " + -17 + "rem)" : "0px",
		}}/>
		<div className="button" onClick={valid ? send : toggle}> 
			{open && !valid ? <MenuClose /> : <SearchIcon/>}
		</div>
	</div>
}