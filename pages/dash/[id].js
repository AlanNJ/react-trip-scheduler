import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { connect } from "react-redux";
import { getInitial } from "../../actions";
import { useRouter } from "next/router";

export const Dashboard = (props) => {
	const router = useRouter();
	const [data, setData] = useState();
	const id = router.query.id;

	useEffect(() => {
		props.getData();

		fetchData();
	}, []);
	//console.log();
	const fetchData = async () => {
		const id = router.query.id;
		if (id) {
			const data = await axios.get(`http://localhost:3000/Users/${id}`);
			console.log(data);
			setData(data.data);
		}
	};

	return (
		<div>
			<h1 className="dash-h1">Your Scheduled Destinations are</h1>
			<div className="dash-container">
				<div>
					<div className="dash-first">
						<span>Banglore</span>
						<GiAirplaneDeparture className="dash-plane" />
						<span>Chennai</span>
					</div>
				</div>
				<span className="dash-date">2022-1-1</span>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getData: (data) => {
			dispatch(getInitial());
		},
	};
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
