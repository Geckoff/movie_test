import {
	ALL_MOVIES_LOADED_SUCCESS,
	SEARCH_SUCCESS,
	SINGLE_MOVIE_LOADED_SUCCESS,
} from "../actions/actionTypes";
import { getShortMovieModel, getFullMovieModel } from "../models";
import { IFullMovieModel, IShortMovieModel } from "../models/types";
import { Reducer } from "redux";

export interface IMoviesState {
	movies: IShortMovieModel[];
	cachedFullMovies: IFullMovieModel[];
	cachedSearches: { [key: string]: IShortMovieModel[] };
}

/**
 * The approach with cahing data in the store allows to avoid extra
 * network calls.
 *
 * I was thinking about refactoring caching to more normalized way
 * when we would have a single array where we store all short movie
 * models regardless of where they came from, but unfortunately didn't
 * have time for that. With this approach if the movie that is loaded
 * is already cached it wouldn't be added to that single cache array.
 * Array for the movies on the main page and search movies object in this
 * case would store only ids of the movies. That way we'll avoid data
 * duplication. At this point it's the biggest improvements I'm envisioning
 * for the current implementation.
 *
 * Depending on particular situation the caching queue can
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
				movies: action.payload.movies.map((movie: IShortMovieModel) =>
					getShortMovieModel(movie)
				),
			};
		case SINGLE_MOVIE_LOADED_SUCCESS:
			const { fullMovieData, dbId } = action.payload;
			return {
				...state,
				cachedFullMovies: [
					...state.cachedFullMovies,
					getFullMovieModel(dbId, fullMovieData),
				],
			};
		case SEARCH_SUCCESS:
			const { movies, searchTerm } = action.payload;
			const movieModels = movies.map((movie: IShortMovieModel) => getShortMovieModel(movie));

			return {
				...state,
				cachedSearches: { ...state.cachedSearches, [searchTerm]: movieModels },
			};
		default:
			return state;
	}
};
