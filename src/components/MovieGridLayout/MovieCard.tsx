import React, { useEffect, useRef, useState } from "react";
import { IShortMovieModel } from "../../redux/models/types";
import { MovieLink } from "./MovieLink";
import posterPlaceHolder from "../../images/poster_placeholder.svg";

export interface IMovieCardProps {
	movie: IShortMovieModel;
	sourcePath: string;
}

export const MovieCard: React.FC<IMovieCardProps> = ({ movie, sourcePath }) => {
	const imgEl = useRef<HTMLImageElement>(null);
	const [hasImageError, setHasImageError] = useState(false);

	useEffect(() => {
		const img = imgEl.current;
		const listener = () => {
			setHasImageError(true);
		};
		img!.addEventListener("error", listener);
		return () => {
			img!.removeEventListener("error", listener);
		};
	}, []);

	return (
		<div className="movie-grid-item">
			<div className="movie-grid-item-image-wrapper">
				<MovieLink movie={movie} sourcePath={sourcePath}>
					<img
						ref={imgEl}
						alt={movie.title}
						src={hasImageError ? posterPlaceHolder : movie.poster}
					></img>
				</MovieLink>
			</div>

			<h4 className="movie-grid-item-title">
				<MovieLink movie={movie} sourcePath={sourcePath}>
					{movie.title}
				</MovieLink>
			</h4>
		</div>
	);
};
