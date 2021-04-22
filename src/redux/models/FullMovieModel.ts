import { IFullMovieModel } from "./types";

export const getFullMovieModel = (
	dbId: number,
	{
		Actors,
		Director,
		Genre,
		Plot,
		Poster,
		Rated,
		Runtime,
		Title,
		Writer,
		Year,
		imdbID,
		imdbRating,
		Released,
	}: any
): IFullMovieModel => ({
	dbId: dbId,
	actors: Actors,
	director: Director,
	genre: Genre,
	plot: Plot,
	poster: Poster,
	rated: Rated,
	runtime: Runtime,
	title: Title,
	writer: Writer,
	year: Year,
	imdbID: imdbID,
	imdbRating: imdbRating,
	released: Released,
});
