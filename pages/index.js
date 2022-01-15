import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getInitial, User } from "../actions";
import { connect } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const index = (props) => {
	const router = useRouter();

	useEffect(() => {
		props.getData();
		pusher();

		//if (props.user. === false) router.push("/login");
	}, [props.user.login]);

	const changeRoute = () => {
		const id = props.user.user.id;
		router.push(`/plans/${id}`);
	};
	const pusher = () => {
		if (props.user.user === null) router.push("/login");
	};

	return (
		<div>
			<h1 className="dash-h1">Add your New Destination</h1>
			<AiOutlinePlusCircle className="plus-icon" onClick={changeRoute} />
			<div className="span">ggggg</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(index);
