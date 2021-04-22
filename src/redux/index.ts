import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configureStore() {
	return createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
				(window as any).__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
}
