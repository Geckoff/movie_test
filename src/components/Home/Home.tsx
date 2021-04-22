import React from "react";
import { parseLocationSearchQSParams } from "../../utils";
import { AllMovies } from "../AllMovies";
import { SearchResults } from "../Search";
import { Location } from "history";

export interface IHomeProps {
	location: Location;
}

export const Home: React.FC<IHomeProps> = ({ location }) => {
	const qsParams = parseLocationSearchQSParams(location.search);
	const hasSearchParam = qsParams ? Object.keys(qsParams).includes("q") : false;

	return hasSearchParam ? <SearchResults searchTerm={qsParams!.q as string} /> : <AllMovies />;
};
