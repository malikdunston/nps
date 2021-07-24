import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App';
	import reportWebVitals from './reportWebVitals';
	import {
		BrowserRouter as Router
	} from "react-router-dom";
	import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
