import { IShortMovieModel } from "./types";

export const getShortMovieModel = ({
	id,
	title,
	releaseDate,
	imdbId,
	poster,
}: any): IShortMovieModel => ({
	id: id,
	title: title,
	releaseDate: releaseDate,
	imdbId: imdbId,
	poster: poster,
});
