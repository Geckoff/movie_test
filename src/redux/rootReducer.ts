import { combineReducers } from "redux";
import { IMoviesState, moviesReducer, loadingReducer, ILoadingState } from "./reducers";

export interface IAppState {
	main: IMoviesState;
	loading: ILoadingState;
}

export default combineReducers({
	main: moviesReducer,
	loading: loadingReducer,
});
