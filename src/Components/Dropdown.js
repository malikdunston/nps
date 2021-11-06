import React, { useState } from 'react';
export default function Dropdown( props ){
	const [ selectedItem, setSelectedItem ] = useState(null);
	const [ config, setConfig ] = useState({
		id: "find-a-park",
		button: "Find A Park",
		text: "Search by State",
		submit: (selectedItem) => {
			window.location.href = `${process.env.PUBLIC_URL}/search/parks/${selectedItem[ 0 ]}`;
		} 
	})
	const onSubmit = e => {
		e.preventDefault();
		if (selectedItem) {
			config.submit(e, selectedItem);
		}
		if (e.key === "Enter") {
			config.submit(e, selectedItem);
		}
	}
	const select = e => {
		setSelectedItem( props.items.filter(item => {
			return item[ 0 ] === e.target.value;
		})[0] );
	}
	return <div className={config.id}>
		<input list={config.id} 
			placeholder={config.text} 
			onKeyDown={onSubmit}
			onChange={select} />
		<datalist id={config.id}>{props.items.map(s => 
			<option key={ s[ 0 ] } value={ s[ 0 ] }> { s[ 1 ] } </option>
		)}</datalist>
		<button type="submit" onClick={onSubmit}>{config.button}</button>
	</div>
}