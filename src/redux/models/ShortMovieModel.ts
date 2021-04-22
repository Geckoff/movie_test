import { IShortMovieModel } from "./types";

export class ShortMovieModel implements IShortMovieModel {
	id: number;
	title: string;
	releaseDate: string;
	imdbId: string;
	poster: string;

	constructor({ id, title, releaseDate, imdbId, poster }: any) {
		this.id = id;
		this.title = title;
		this.releaseDate = releaseDate;
		this.imdbId = imdbId;
		this.poster = poster;
	}
}
