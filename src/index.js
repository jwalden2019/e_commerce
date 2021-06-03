import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store/reducers/rootReducer.js";
import { Provider } from "react-redux";
// import thunk from "react-thunk";
// import { getFirestore } from "redux-firestore";
// import { getFirebase } from "react-redux-firebase";

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Provider store={store}> */}
			<App />
			{/* </Provider> */}
		</BrowserRouter>
	</React.StrictMode>,

	document.getElementById("root")
);
