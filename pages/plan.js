import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getInitial } from "../actions";

export const planJourney = (props) => {
	const [start, setStart] = useState();
	const [end, setEnd] = useState();
	useEffect(() => {
		props.getInitial();
	}, []);
	const setJourney = (e) => {
		console.log("fuck");
	};
	return (
		<div className="plan-container">
			<h1>Plan Your New Destination</h1>
			<div className="fields">
				<input
					placeholder="Set Starting Location"
					onChange={(e) => setStart(e.target.value)}
				/>
				<input
					placeholder="Set Arriving Location"
					onChange={(e) => setEnd(e.target.value)}
				/>
			</div>
			<button onClick={(e) => setJourney(e)}>Set Journey</button>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(logOut());
		},
		getInitial: (data) => {
			dispatch(getInitial(data));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(planJourney);
