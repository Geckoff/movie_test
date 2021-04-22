import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAllMovies } from "../../redux/actions/actions";
import { getAllMovies } from "../../redux/selectors";
import { LoadingBlock } from "../Base/LoadingBlock";
import { MovieGridLayout } from "../MovieGridLayout";

export const AllMovies: React.FC = () => {
	const dispatch = useDispatch();
	const allMovies = useSelector(getAllMovies);

	useEffect(() => {
		if (allMovies.length === 0) {
			dispatch(requestAllMovies());
		}
	}, [allMovies]);

	return (
		<LoadingBlock>
			<MovieGridLayout sourcePath="/" gridTitle="All Movies" movies={allMovies} />
		</LoadingBlock>
	);
};
