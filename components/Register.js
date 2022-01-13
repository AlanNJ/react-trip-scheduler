import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import Link from "next/link";

const Register = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [phone, setPhone] = useState();
	const [user, setUser] = useState([]);
	const [ok, setOk] = useState(false);
	const router = useRouter();

	const handleClick = async (e) => {
		e.preventDefault();

		const data = { name, email, password, phone };
		if (
			data.name === undefined ||
			data.email === undefined ||
			data.password === undefined ||
			data.phone === undefined
		) {
			console.log("OOps!You didn't filled all the fields");
		} else {
			addUser();
		}
	};
	const addUser = async () => {
		const res = await axios.post("http://localhost:3000/Users", {
			name,
			email,
			password,
			phone,
		});
		setUser(res);
		setOk(true);
	};

	return (
		<div className="reg-container">
			<input
				type="text"
				placeholder="Name"
				className="input"
				onChange={(e) => setName(e.target.value)}
			/>
			name
			<input
				type="text"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			email
			<input
				type="text"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			password
			<input
				type="text"
				placeholder="Phone.no"
				onChange={(e) => setPhone(e.target.value)}
			/>
			phone
			<button type="submit" onClick={(e) => handleClick(e)}>
				Submit
			</button>
			<div>
				<Modal
					title="congratulations"
					visible={ok}
					onCancel={() => setOk(false)}
					footer={null}
				>
					<p>You have successfully registered</p>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</Modal>
			</div>
		</div>
	);
};
export default Register;
