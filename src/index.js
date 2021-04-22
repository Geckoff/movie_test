import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/index.scss";

import configureStore from "./redux";
import Routes from "./Routes.tsx";

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById("root")
);
