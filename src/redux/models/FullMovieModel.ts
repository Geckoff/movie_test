import { IFullMovieModel } from "./types";

export class FullMovieModel implements IFullMovieModel {
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

	constructor(
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
	) {
		this.dbId = dbId;
		this.actors = Actors;
		this.director = Director;
		this.genre = Genre;
		this.plot = Plot;
		this.poster = Poster;
		this.rated = Rated;
		this.runtime = Runtime;
		this.title = Title;
		this.writer = Writer;
		this.year = Year;
		this.imdbID = imdbID;
		this.imdbRating = imdbRating;
		this.released = Released;
	}
}
