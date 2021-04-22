import React from "react";
import { IShortMovieModel } from "../../redux/models/types";
import { MovieCard } from "./MovieCard";
import noResultsImg from "../../images/no_results.svg";

export interface IMovieGridLayoutProps {
	gridTitle: string;
	movies: IShortMovieModel[];
	sourcePath: string;
}

export const MovieGridLayout: React.FC<IMovieGridLayoutProps> = ({
	gridTitle,
	movies,
	sourcePath,
}) => {
	return (
		<div className="movie-grid-wrapper">
			<h2>{gridTitle}</h2>
			{movies.length === 0 ? (
				<div className="movie-grid-no-results">
					<img src={noResultsImg} alt="No results" />
				</div>
			) : (
				<div className="movie-grid">
					{movies.map((movie) => (
						<MovieCard key={movie.imdbId} movie={movie} sourcePath={sourcePath} />
					))}
				</div>
			)}
		</div>
	);
};
