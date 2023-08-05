import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import RequestEditor from "./components/RequestEditor";
import ResponseViewer from "./components/ResponseViewer";
import SideMenu from "./components/SideMenu";

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
		<App/>
	</React.StrictMode>
)
