import {
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	SEARCH_FAILURE,
	SINGLE_MOVIE_LOADED_REQUEST,
	SINGLE_MOVIE_LOADED_SUCCESS,
	SINGLE_MOVIE_LOADED_FAILURE,
	ALL_MOVIES_LOADED_REQUEST,
	ALL_MOVIES_LOADED_SUCCESS,
	ALL_MOVIES_LOADED_FAILURE,
} from "../actions/actionTypes";
import { Reducer } from "redux";

export interface ILoadingState {
	isLoadingAllMovies: boolean;
	isLoadingSingleMovie: boolean;
	isLoadingSearch: boolean;
}

const initialState = {
	isLoadingAllMovies: false,
	isLoadingSingleMovie: false,
	isLoadingSearch: false,
};

/**
 * TODO: Refactor to redux-actions
 */
export const loadingReducer: Reducer<ILoadingState> = (state = initialState, action: any) => {
	switch (action.type) {
		case ALL_MOVIES_LOADED_REQUEST:
			return {
				...state,
				isLoadingAllMovies: true,
			};
		case ALL_MOVIES_LOADED_SUCCESS:
			return {
				...state,
				isLoadingAllMovies: false,
			};
		case ALL_MOVIES_LOADED_FAILURE:
			return {
				...state,
				isLoadingAllMovies: false,
			};
		case SINGLE_MOVIE_LOADED_REQUEST:
			return {
				...state,
				isLoadingSingleMovie: true,
			};
		case SINGLE_MOVIE_LOADED_FAILURE:
			return {
				...state,
				isLoadingSingleMovie: false,
			};
		case SINGLE_MOVIE_LOADED_SUCCESS:
			return {
				...state,
				isLoadingSingleMovie: false,
			};
		case SEARCH_REQUEST:
			return {
				...state,
				isLoadingSearch: true,
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				isLoadingSearch: false,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				isLoadingSearch: false,
			};
		default:
			return state;
	}
};
