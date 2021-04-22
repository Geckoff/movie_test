import React from "react";

export interface ISingleMovieInfoItem {
	itemTitle: string;
	itemContent: string;
}

export const SingleMovieInfoItem: React.FC<ISingleMovieInfoItem> = ({ itemTitle, itemContent }) => (
	<div className="single-movie-info-item">
		<h3 className="single-movie-info-item-title">{itemTitle}</h3>
		<p className="single-movie-info-item-desc">{itemContent}</p>
	</div>
);
