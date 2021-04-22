import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import { Home } from "./components/Home";
import { SingleMovie } from "./components/SingleMovie";

const Routes = () => {
	return (
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:id" component={SingleMovie} />
			</Switch>
		</App>
	);
};

export default withRouter(Routes);
