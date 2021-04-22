import axios from "axios";

const SERVICES_HOST = "http://localhost:3001";

const doFetch = async (endpoint: string) => {
	const response = await axios.get(endpoint);
	return response.data;
};

const doServiceFetch = (servicesEndpoint: string) =>
	doFetch(`${SERVICES_HOST}/${servicesEndpoint}`);

const MoviesService = {
	getAllMovies: () => doServiceFetch("movies/all"),
	getSingleMovieShortData: (id: string | number) => doServiceFetch(`movies/${id}`),
	searchMovies: (searchTerm: string) => doServiceFetch(`movies/search?s=${searchTerm}`),

	getSingleMovieFullData: (imdbId: string) =>
		doFetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=c32d368e`),
};

export default MoviesService;
