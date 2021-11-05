import React, { useState, useEffect } from 'react';
import Config from "../config.json";
export default function getData (OrigComp) {
	return function GetDataHOC ( props ) {
		const getData = async ( lookFor, params ) =>{
			params = params || {};
			params["api_key"] = Config.__nps_config;
			let url = new URL(("https://developer.nps.gov/api/v1/" + lookFor));
			url.search = new URLSearchParams(params).toString();
			return  await fetch(url).then(resp => resp.json());
		}
		const getStates = () => {
			let abbrs = Object.keys(Config.state);
			abbrs = abbrs.map(s=>{
				return [s, Config.state[ s ]]
			});
			return abbrs
		}
		return <OrigComp {...props} getData={getData} states={getStates()}/>
	}
}