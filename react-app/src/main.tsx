import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import RequestEditor from "./components/RequestEditor";
import ResponseViewer from "./components/ResponseViewer";

export default function App() {
	return (
		<div className="grid">
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
