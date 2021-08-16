import React, { Component } from 'react';

class FindAPark extends Component {
	constructor(props) {
		super(props);
		this.state = {
			states: {
				selected: ""
			}
		}
	}
	submit(e) {
		if (this.state.states.selected) {
			e.preventDefault();
			window.location.href = `${process.env.PUBLIC_URL}/search/parks/${this.state.states.selected}`;
		}
	}
	render() {
		return (
			<div className="find-a-park">
				<input list="find-a-park" 
					placeholder="Find Your Park by State" 
					onKeyDown={(e) => e.key === "Enter" && this.submit(e)}
					onChange={(e) => {
						this.setState({ states: { selected: e.target.value } })
				}} />
				<datalist id="find-a-park">
					{this.props.states.map(s => {
						return <option value={s[0]}>{s[1]}</option>
					})}
				</datalist>
				<button type="submit" onClick={(e) => { this.submit(e); }}>Find A Park</button>
			</div>
		);
	}
}

export default FindAPark;