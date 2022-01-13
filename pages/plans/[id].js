import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getInitial } from "../../actions";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const planJourney = (props) => {
	const [start, setStart] = useState();
	const [end, setEnd] = useState();
	const router = useRouter();
	useEffect(() => {
		props.getInitial();
		console.log(props.user);
	}, []);
	const setJourney = async (e) => {
		const id = router.query.id;
		var today = new Date(),
			date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate();
		if (start === undefined || end === undefined) {
			toast.error("Please select both destinations");
		} else {
			const data = await axios.patch(`http://localhost:3000/Users/${id}`, {
				destinations: [
					{
						start,
						end,
						id,
						date,
					},
				],
			});
			toast.success("Destination Added");
			setTimeout(() => {
				router.push("/");
			}, [2000]);
		}
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
