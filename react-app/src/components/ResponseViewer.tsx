
import { Fragment, useState } from "react";
import ResponseBodyTab from "./tabs/ResponseBodyTab";
import ResponseCookiesTab from "./tabs/ResponseCookiesTab";
import ResponseHeadersTab from "./tabs/ResponseHeadersTab";
import NoResponseTab from "./tabs/NoResponseTab";
import { useSelector } from "react-redux";
import { AppState } from "../types/state";

export default function ResponseViewer() {

	const [activeTab, setActiveTab] = useState(0);
	const response = useSelector((state: AppState) => state.response) 

	const renderTab = () => {
		if (response == null) return <NoResponseTab/>
		switch(activeTab) {
			case 0: return <ResponseBodyTab/>;
			case 1: return <ResponseCookiesTab/>;
			case 2: return <ResponseHeadersTab/>;
			default: return <ResponseBodyTab/>;
		}
	}

	const renderNavContent = () => {
		if (response == null) {
			return <p style={{ padding: "10px", fontFamily: "Avenir" }}>Response</p>
		} else {
			return (
				<Fragment>
					<button className={activeTab == 0 ? "selected" : undefined} onClick={() => setActiveTab(0)}>Body</button>
					<button className={activeTab == 1 ? "selected" : undefined}onClick={() => setActiveTab(1)}>Cookies</button>
					<button className={activeTab == 2 ? "selected" : undefined} onClick={() => setActiveTab(2)}>Headers</button>
				</Fragment>
			)
		}
	}

	return (
		<div className="response-viewer">
			<nav>{renderNavContent()}</nav>
			<div style={{ width: "100%", height: "100%"}}>{renderTab()}</div>
		</div>
	)
}