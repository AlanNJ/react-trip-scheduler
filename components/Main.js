import React from "react";
import { ImCross } from "react-icons/im";

export const Main = () => {
	return (
		<div className="main-container">
			<h1 className="main-h1">Select destinations</h1>
			<div className="search-box">
				<input type="text" placeholder="search students" />
				<ImCross className="search-button" />
			</div>
		</div>
	);
};
