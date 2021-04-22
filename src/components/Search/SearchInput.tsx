import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextInput } from "../Base";

export const SearchInput: React.FC = () => {
	const history = useHistory();
	const [searchTerm, setSearchTerm] = useState("");

	const goToSearch = (searchTerm: string) => {
		history.push(`/?q=${searchTerm}`);
	};

	const onInputEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			goToSearch(searchTerm);
		}
	};

	return (
		<TextInput
			className="search-input"
			onKeyDown={onInputEnterPress}
			additionalHandler={goToSearch}
			value={searchTerm}
			setValue={setSearchTerm}
			placeholder="Search"
		/>
	);
};
