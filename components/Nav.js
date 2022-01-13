import React, { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { logOut } from "../actions";
import { SideNav } from "./SideNav";
import { MdTrain } from "react-icons/md";
import { useRouter } from "next/router";
import { getInitial } from "../actions";

const Nav = (props) => {
	useEffect(() => {
		props.getData();
	}, [props.user.user && props.user.user.id]);

	const logoutUser = (e) => {
		console.log("hhhh");
		props.logout();
		window.localStorage.removeItem("User");
	};
	const router = useRouter();
	if (props.user.user) {
		const id = props.user.user.id;
	}

	return (
		<>
			<div className="nav-container">
				{props.user.user ? (
					<>
						<Link href="/">
							<a>
								<span className="menu-icon">
									<MdTrain />
								</span>
								Home
							</a>
						</Link>
						{id && (
							<Link href={{ pathname: "/dashboard", query: { id } }}>
								<a>{props.user.user.name} Dashboard</a>
							</Link>
						)}

						<Link href="/login">
							<a onClick={logoutUser}>Logout</a>
						</Link>
					</>
				) : (
					<>
						<Link href="/register">
							<a>Register</a>
						</Link>

						<Link href="/login">
							<a>Login</a>
						</Link>
					</>
				)}
			</div>
		</>
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
		getData: (data) => {
			dispatch(getInitial());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
