import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestSearch } from "../../redux/actions/actions";
import { getMoviesBySearchTerm } from "../../redux/selectors";
import { LoadingBlock } from "../Base";
import { MovieGridLayout } from "../MovieGridLayout";

export interface ISearchResultsProps {
	searchTerm: string;
}

export const SearchResults: React.FC<ISearchResultsProps> = ({ searchTerm }) => {
	const dispatch = useDispatch();
	const movies = useSelector(getMoviesBySearchTerm(searchTerm));

	useEffect(() => {
		if (!movies) {
			dispatch(requestSearch(searchTerm));
		}
	}, [searchTerm]);

	const gridTitle = `${movies?.length || 0} results for "${searchTerm}"`;

	return (
		<LoadingBlock>
			<MovieGridLayout
				sourcePath={`/?q=${searchTerm}`}
				gridTitle={gridTitle}
				movies={movies || []}
			/>
		</LoadingBlock>
	);
};
