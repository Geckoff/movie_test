import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestSingleMovieByDbId, requestSingleMovieByImdbId } from "../../redux/actions/actions";
import { getFullMovie } from "../../redux/selectors";
import { LinkButton } from "../Base/LinkButton";
import { History, Location } from "history";
import { match } from "react-router";
import { LoadingBlock } from "../Base";
import { SingleMovieError } from "./SingleMoviewError";
import { SingleMovieInfo } from "./SingleMovieInfo";
import { isNumeric } from "../../utils";

export interface ISingleMovie {
	location: Location<{ imdbId: string; sourcePath: string }>;
	history: History;
	match: match<{ id?: string | undefined }>;
}

export const SingleMovie: React.FC<ISingleMovie> = ({ location, match }) => {
	let idParam = match.params.id;
	const id = typeof idParam === "string" && isNumeric(idParam) ? parseInt(idParam) : null;
	const resultsPath = location.state?.sourcePath || "/";
	const dispatch = useCallback(useDispatch(), []);
	const movie = useSelector(getFullMovie(id));

	useEffect(() => {
		if (!movie && id !== null) {
			const imdbId = location.state?.imdbId;
			if (imdbId === undefined) {
				dispatch(requestSingleMovieByDbId(id));
			} else {
				dispatch(requestSingleMovieByImdbId(imdbId, id));
			}
		}
	}, [dispatch]);

	return (
		<LoadingBlock>
			<div className="single-movie-wrapper">
				<div className="single-movie-back-button">
					<LinkButton pathName={resultsPath}>Back To Results</LinkButton>
				</div>
				{!movie ? <SingleMovieError /> : <SingleMovieInfo movieInfo={movie} />}
			</div>
		</LoadingBlock>
	);
};
