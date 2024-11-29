import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";

function App() {
	return (
		<>
			{/* This is the alias of BrowserRouter i.e. Router */}
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>

					<Route
						path="/portfolio"
						element={<Portfolio />}
					/>
					
					{/* If any route mismatches the upper 
		route endpoints then, redirect triggers 
		and redirects app to home component with to="/" */}
					{/* <Redirect to="/" /> */}
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
