import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RequestEditor from "./components/RequestEditor";
import ResponseViewer from "./components/ResponseViewer";
import SideMenu from "./components/SideMenu";
import store from "./state/store";
import { Provider, useDispatch } from "react-redux";
import { fetchExampleResponse } from "./services/data.service";
import { updateResponse } from "./state/actions";

export default function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		fetchExampleResponse().then((res) => {
			console.log(res);
			dispatch(updateResponse(res));
		}).catch((err) => {
			dispatch(updateResponse(err))
		})
	});

	return (
		<div className="grid">
			<SideMenu/>
			<RequestEditor/>
			<ResponseViewer/>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<App/>
	</Provider>
)
