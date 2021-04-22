import React from "react";
import { Container } from "./Container";

export const MainContent: React.FC = ({ children }) => (
	<Container className="main-content-container">
		<main className="main-content">{children}</main>
	</Container>
);
