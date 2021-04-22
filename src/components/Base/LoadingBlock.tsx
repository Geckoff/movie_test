import React from "react";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/selectors";

export const LoadingBlock: React.FC = ({ children }) => {
	const isLoading = useSelector(getIsLoading);

	return (
		<>{isLoading ? <h2 className="main-content-loading-indicator">Loading...</h2> : children}</>
	);
};
