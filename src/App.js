import React from "react";
import Navigation from "./components/Navigation.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Products from "./components/Products.jsx";
import AboutUs from "./components/AboutUs.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div className="app__container">
				<div className="app__navigation">
					<Navigation />
				</div>
				<div className="app_routerswitches">
					<Switch>
						<Route path="/LandingPage" component={LandingPage}></Route>
						<Route path="/Products" component={Products}></Route>
						<Route path="/AboutUs" component={AboutUs}></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
