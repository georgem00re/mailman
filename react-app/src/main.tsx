import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import RequestEditor from "./components/RequestEditor";
import ResponseViewer from "./components/ResponseViewer";
import SideMenu from "./components/SideMenu";
import store from "./state/store";
import { Provider } from "react-redux";

export default function App() {
	return (
		<div className="grid">
			<SideMenu/>
			<RequestEditor/>
			<ResponseViewer/>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
)
