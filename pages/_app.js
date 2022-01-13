import "./index.css";
import { Provider } from "react-redux";
import store from "../store";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Nav className="navv" />
				<ToastContainer position="top-center" autoClose={1500} />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
export default MyApp;
