import {
	LOGIN_USER,
	SET_USER,
	LOGOUT_USER,
	INITIAL_DATA,
} from "./action-types";
import axios from "axios";
import { toast } from "react-toastify";

export const getInitialData = (data) => {
	return {
		type: INITIAL_DATA,
		payload: data,
	};
};
const setUser = (data) => {
	return {
		type: SET_USER,
		payload: data,
	};
};

export const logoutUser = () => {
	return {
		type: LOGOUT_USER,
		payload: null,
	};
};

export const loginUser = (data) => {
	return (dispatch) => {
		axios.get("http://localhost:3000/Users").then((res) => {
			res.data.forEach((element) => {
				if (
					data.email === element.email &&
					data.password === element.password
				) {
					console.log(element);
					dispatch(setUser(element));
					toast.success("login successful");
					window.localStorage.setItem("User", JSON.stringify(element));
				} else {
					toast.error("no users found");
				}
			});
		});
	};
};
export const getInitial = () => {
	return (dispatch) => {
		//console.log("hello");
		//window.localStorage.getItem("login");
		const data = window.localStorage.getItem("User");
		//console.log(JSON.parse(data));
		dispatch(getInitialData(JSON.parse(data)));
	};
};

export const logOut = () => {
	console.log("hh");
	return (dispatch) => {
		dispatch(logoutUser());
	};
};
