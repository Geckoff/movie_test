import React from "react";
import { Header, MainContent } from "./Base";

const App: React.FC = ({ children }) => {
	return (
		<div className="app">
			<Header />
			<MainContent>{children}</MainContent>
		</div>
	);
};

export default App;
