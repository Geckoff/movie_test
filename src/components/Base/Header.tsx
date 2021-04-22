import React from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "../Search";
import { Container } from "./Container";

export const Header: React.FC = () => (
	<Container className="header-container">
		<header className="header">
			<Link className="header-title-link" to="/">
				<h1 className="header-title">My Movie DB</h1>
			</Link>
			<SearchInput />
		</header>
	</Container>
);
