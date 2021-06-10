import React from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Products from "./components/Products.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<div className="app__container">
			<Router>
				<div className="app__navigation">
					<Navigation />
				</div>
				<div className="app_routerswitches">
					<Switch>
						<Route path="/LandingPage" component={LandingPage}></Route>
						<Route path="/Products" component={Products}></Route>
						<Route path="/AboutUs" component={AboutUs}></Route>
						<Route path="/Cart" component={Cart}></Route>
						<Route path="*" component={Error}></Route>
					</Switch>
				</div>
				<div className="app__footer">
					<Footer />
				</div>
			</Router>
		</div>
	);
}
