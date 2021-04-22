export interface IFullMovieModel {
	dbId: number;
	actors: string;
	director: string;
	genre: string;
	plot: string;
	poster: string;
	rated: string;
	runtime: string;
	title: string;
	writer: string;
	year: string;
	imdbID: string;
	imdbRating: string;
	released: string;
}

export interface IShortMovieModel {
	id: number;
	title: string;
	releaseDate: string;
	imdbId: string;
	poster: string;
}
