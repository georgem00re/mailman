
import { Fragment, useState } from "react";
import ResponseBodyTab from "./ResponseBodyTab";
import ResponseCookiesTab from "./ResponseCookiesTab";
import ResponseHeadersTab from "./ResponseHeadersTab";

export default function ResponseViewer() {

	const [activeTab, setActiveTab] = useState(0);

	const renderTab = () => {
		switch(activeTab) {
			case 0: return <ResponseBodyTab/>;
			case 1: return <ResponseCookiesTab/>;
			case 2: return <ResponseHeadersTab/>;
			default: return <ResponseBodyTab/>;
		}
	}

	return (
		<div className="response-viewer">
			<nav>
				<button className={activeTab == 0 ? "selected" : null} onClick={() => setActiveTab(0)}>Body</button>
				<button className={activeTab == 1 ? "selected" : null}onClick={() => setActiveTab(1)}>Cookies</button>
				<button className={activeTab == 2 ? "selected" : null} onClick={() => setActiveTab(2)}>Headers</button>
			</nav>
			<div>{renderTab()}</div>
		</div>
	)
}