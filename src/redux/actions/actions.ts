import MoviesService from "../../services/movies";
import { Dispatch } from "redux";
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
} from "./actionTypes";

export const requestAllMovies = () => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: ALL_MOVIES_LOADED_REQUEST });
		const movies = await MoviesService.getAllMovies();
		dispatch({
			type: ALL_MOVIES_LOADED_SUCCESS,
			payload: {
				movies,
			},
		});
	} catch (e) {
		dispatch({ type: ALL_MOVIES_LOADED_FAILURE });
	}
};

export const requestSearch = (searchTerm: string) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: SEARCH_REQUEST });
		const movies = await MoviesService.searchMovies(searchTerm);

		dispatch({
			type: SEARCH_SUCCESS,
			payload: {
				movies,
				searchTerm,
			},
		});
	} catch (e) {
		/**
		 * Initially server was returning 404 when search results are empty.
		 * I updated the route on the backend since I thought that
		 * 200 range would be better option for this call
		 * since user sends valid data and gets valid response.
		 * For the intial implementation of the service caching empty array
		 * result was implemented inside of catch block
		 */
		// dispatch({
		// 	type: SEARCH_SUCCESS,
		// 	payload: {
		// 		movies: [],
		// 		searchTerm,
		// 	},
		// });
		dispatch({ type: SEARCH_FAILURE });
	}
};

export const requestSingleMovieByDbId = (dbId: number) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: SINGLE_MOVIE_LOADED_REQUEST });
		const movie = await MoviesService.getSingleMovieShortData(dbId);
		const imdbId = movie[0]?.imdbId;

		dispatchSingleMovieLoadedSuccess(dispatch, imdbId, dbId);
	} catch (e) {
		dispatch({ type: SINGLE_MOVIE_LOADED_FAILURE });
	}
};

export const requestSingleMovieByImdbId = (imdbId: string, dbId: number) => async (
	dispatch: Dispatch
) => {
	try {
		dispatch({ type: SINGLE_MOVIE_LOADED_REQUEST });
		dispatchSingleMovieLoadedSuccess(dispatch, imdbId, dbId);
	} catch (e) {
		dispatch({ type: SINGLE_MOVIE_LOADED_FAILURE });
	}
};

const dispatchSingleMovieLoadedSuccess = async (
	dispatch: Dispatch,
	imdbId: string,
	dbId: number
) => {
	const fullMovieData = await MoviesService.getSingleMovieFullData(imdbId);
	//omdbapi returns 200 when response is Error
	if (fullMovieData.Error) {
		dispatch({ type: SINGLE_MOVIE_LOADED_FAILURE });
		return;
	}

	dispatch({
		type: SINGLE_MOVIE_LOADED_SUCCESS,
		payload: {
			fullMovieData,
			dbId,
		},
	});
};
