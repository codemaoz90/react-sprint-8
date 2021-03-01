import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import App from "./App";
export default function Routes() {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route component={App} />
				</Switch>
			</main>
		</Router>
	);
}
