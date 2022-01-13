import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdTrain } from "react-icons/md";
import { connect } from "react-redux";
import { getInitial } from "../actions";

export const Dashboard = (props) => {
	const [data, setData] = useState();
	const router = useRouter();
	const id = router.query.id;

	useEffect(() => {
		props.getData();
		fetchData(id);
	}, []);
	const fetchData = async (id) => {
		if (id) {
			const data = await axios.get(`http://localhost:3000/Users/${id}`);
			setData(data.data);
		}
	};

	return (
		<div className="dashed">
			{data && data.destinations ? (
				<>
					<h1 className="dash-h1">Your Scheduled Destinations are</h1>
					<div className="dash-container">
						<div>
							{data && data.destinations && (
								<div className="dash-first">
									<span>{data.destinations[0].start}</span>
									<MdTrain className="dash-plane" />
									<span>{data.destinations[0].end}</span>
								</div>
							)}
						</div>
						{data && data.destinations && (
							<span className="dash-date">
								{<span className="dash-date">{data.destinations[0].date}</span>}
							</span>
						)}
					</div>
				</>
			) : (
				<h1 className="dash-h1">Nothing to show</h1>
			)}
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
