import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
export default function Search ( props ) {
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
	return <div className={`search ${open ? "open" : ""}`}>
		<input type="text" onChange={update} />
		<div className="button" onClick={valid ? send : toggle}> <SearchIcon /></div>
	</div>
}