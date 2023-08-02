import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
	return (
		<Fragment>
			<h1>Working!</h1>
		</Fragment>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
)