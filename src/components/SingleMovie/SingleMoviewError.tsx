import React from "react";
import exclamation from "../../images/exclamation.svg";

export const SingleMovieError: React.FC = ({ children }) => (
	<div className="single-movie-error">
		<h2 className="single-movie-error-title">Oops, something went wrong!</h2>
		<img className="single-movie-error-image" src={exclamation} alt="Not found" />
	</div>
);
