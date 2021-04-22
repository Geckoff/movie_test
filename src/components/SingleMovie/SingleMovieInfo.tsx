import React from "react";
import { SingleMovieInfoItem } from "./SingleMovieInfoItem";

export interface ISingleMovieInfoProps {
	movieInfo: {
		title: string;
		year: string;
		imdbRating: string;
		poster: string;
		rated: string;
		runtime: string;
		genre: string;
		released: string;
		director: string;
		plot: string;
		writer: string;
		actors: string;
		imdbID: string;
	};
}

export const SingleMovieInfo: React.FC<ISingleMovieInfoProps> = ({ movieInfo }) => {
	const {
		title,
		year,
		imdbRating,
		poster,
		rated,
		runtime,
		genre,
		released,
		director,
		plot,
		writer,
		actors,
		imdbID,
	} = movieInfo;
	return (
		<div className="single-movie">
			<h2 className="single-movie-title-mobile">
				{title} - ({year})
			</h2>
			<div className="single-movie-left">
				<div className="single-movie-image-wrapper">
					<img className="single-movie-image" src={poster} alt={title} />
				</div>
			</div>
			<div className="single-movie-right">
				<div className="single-movie-header">
					<div className="single-movie-header-top">
						<h2 className="single-movie-header-title">
							{title} - ({year})
						</h2>
						<span className="single-movie-header-rating">{imdbRating} / 10</span>
					</div>
					<div className="single-movie-header-bottom">
						<span className="single-movie-header-bottom-item">{rated}</span>
						<span className="single-movie-header-bottom-item">{runtime}</span>
						<span className="single-movie-header-bottom-item">{genre}</span>
						<span className="single-movie-header-bottom-item">{released}</span>
					</div>
				</div>
				<div className="single-movie-info">
					<SingleMovieInfoItem itemContent={plot} itemTitle="Plot" />
					<SingleMovieInfoItem itemContent={director} itemTitle="Directors" />
					<SingleMovieInfoItem itemContent={writer} itemTitle="Writers" />
					<SingleMovieInfoItem itemContent={actors} itemTitle="Actors" />
					<SingleMovieInfoItem itemContent={imdbID} itemTitle="IMDB ID" />
				</div>
			</div>
		</div>
	);
};
