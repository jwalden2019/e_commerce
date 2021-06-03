import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers/rootReducer.js";
import { Provider } from "react-redux";
// import { FirebaseProvider } from "react-redux-firebase";

const store = createStore(rootReducer);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* <FirebaseProvider> */}
				<App />
				{/* </FirebaseProvider> */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,

	document.getElementById("root")
);
