import React from "react";
import { Link } from "react-router-dom";
import { IShortMovieModel } from "../../redux/models/types";

export interface IMovieLinkProps {
	movie: IShortMovieModel;
	sourcePath: string;
}

export const MovieLink: React.FC<IMovieLinkProps> = ({ movie, children, sourcePath }) => (
	<Link
		to={{
			pathname: `/${movie.id}`,
			state: { imdbId: movie.imdbId, sourcePath },
		}}
	>
		{children}
	</Link>
);
