import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import { toast } from "react-toastify";

const login = (props) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [user, setUser] = useState();
	const router = useRouter();
	useEffect(() => {
		if (props.user.user) router.push("/");
	}, [props.user && props.user.user && props.user.login]);

	const handleClick = async (e) => {
		e.preventDefault();
		const data = { email, password };
		if (data.email === undefined || data.password === undefined) {
			console.log("OOps!You didn't filled all the fields");
			toast.error("please fill something");
		} else {
			props.loginUser({ email, password });
		}
	};

	return (
		<div className="reg-container">
			<input
				type="text"
				placeholder="Enter your email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			Email
			<input
				type="text"
				placeholder="Enter your password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			Password
			<button type="submit" onClick={(e) => handleClick(e)}>
				login
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (data) => {
			dispatch(loginUser(data));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(login);
