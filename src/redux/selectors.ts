import { ILoadingState } from "./reducers";
import { IAppState } from "./rootReducer";

export const getAllMovies = (state: IAppState) => state.main.movies;

export const getFullMovie = (id: number | null) => (state: IAppState) =>
	state.main.cachedFullMovies.find((fullMovie) => fullMovie.dbId === id);

export const getMoviesBySearchTerm = (searchTerm: string) => (state: IAppState) => {
	const cachedSearches = state.main.cachedSearches;
	const isSearchCached = Object.keys(cachedSearches).includes(searchTerm);

	return isSearchCached ? cachedSearches[searchTerm] : null;
};

export const getIsLoading = (state: IAppState) => {
	return (
		state.loading.isLoadingAllMovies ||
		state.loading.isLoadingSearch ||
		state.loading.isLoadingSingleMovie
	);
};
