import React, { Component } from 'react';

class FindAPark extends Component {
	constructor(props){
		super(props);
		this.state = {
			states: {
				selected: ""
			}
		}
	}
	submit(e){
		if(this.state.states.selected){
			e.preventDefault();
			window.location.href = `${process.env.PUBLIC_URL}/search/parks/${this.state.states.selected}`;
		}
	}
	render() {
		return (
			<div className="find-a-park">
				<select onChange={(e)=>{
					this.setState({states: {selected: e.target.value}})}}>
					{this.props.states.map(s=>{
						return <option value={s[0]}>{s[1]}</option>
					})}
				</select>
				<button type="submit" onClick={(e)=>{this.submit(e);}}>Find A Park</button>
			</div>
		);
	}
}

export default FindAPark;