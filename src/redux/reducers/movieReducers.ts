import {
	ALL_MOVIES_LOADED_SUCCESS,
	SEARCH_SUCCESS,
	SINGLE_MOVIE_LOADED_SUCCESS,
} from "../actions/actionTypes";
import { ShortMovieModel, FullMovieModel } from "../models";
import { IFullMovieModel, IShortMovieModel } from "../models/types";
import { Reducer } from "redux";

export interface IMoviesState {
	movies: IShortMovieModel[];
	cachedFullMovies: IFullMovieModel[];
	cachedSearches: { [key: string]: IShortMovieModel[] };
}

/**
 * The approach with cahing data in the store allows to avoid extra
 * network calls. Depending on particular situation the caching queue can
 * have a limit of elemets or time expiration. Or store can be build without cache approach.
 */
const initialState = {
	movies: [],
	cachedFullMovies: [],
	cachedSearches: {},
};

/**
 * TODO: Refactor to redux-actions
 */
export const moviesReducer: Reducer<IMoviesState> = (state = initialState, action: any) => {
	switch (action.type) {
		case ALL_MOVIES_LOADED_SUCCESS:
			return {
				...state,
				movies: action.payload.movies.map(
					(movie: IShortMovieModel) => new ShortMovieModel(movie)
				),
			};
		case SINGLE_MOVIE_LOADED_SUCCESS:
			const { fullMovieData, dbId } = action.payload;
			return {
				...state,
				cachedFullMovies: [
					...state.cachedFullMovies,
					new FullMovieModel(dbId, fullMovieData),
				],
			};
		case SEARCH_SUCCESS:
			const { movies, searchTerm } = action.payload;
			const movieModels = movies.map((movie: IShortMovieModel) => new ShortMovieModel(movie));

			return {
				...state,
				cachedSearches: { ...state.cachedSearches, [searchTerm]: movieModels },
			};
		default:
			return state;
	}
};
