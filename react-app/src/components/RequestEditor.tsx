
import { Fragment, useState } from "react";
import RequestParamsTab from "./RequestParamsTab";
import RequestAuthTab from "./RequestAuthTab";
import RequestHeadersTab from "./RequestHeadersTab";
import RequestBodyTab from "./RequestBodyTab";

export default function RequestEditor() {

	const [activeTab, setActiveTab] = useState(0);

	const renderTab = () => {
		switch (activeTab) {
			case 0: return <RequestParamsTab/>;
			case 1: return <RequestAuthTab/>;
			case 2: return <RequestHeadersTab/>;
			case 3: return <RequestBodyTab/>;
			default: return <RequestParamsTab/>;
		}
	}

	return (
		<div className="request-editor">
			<div style={{ width: "100%", display: "flex", padding: "20px", boxSizing: "border-box", }}>
				<select name="methods" id="methods">
					<option value="GET">GET</option>
					<option value="POST">POST</option>
					<option value="PUT">PUT</option>
					<option value="DELETE">DELETE</option>
				</select>
				<input type="text" style={{ width: "100%" }}/>
				<button style={{ marginLeft: "10px", backgroundColor: "#377CE0", color: "white", borderStyle: "none", paddingLeft: "30px", paddingRight: "30px", borderRadius: "2px", cursor: "pointer"}}>Send</button>
			</div>
			<nav>
				<button className={activeTab == 0 ? "selected" : null} onClick={() => setActiveTab(0)}>Params</button>
				<button className={activeTab == 1 ? "selected" : null} onClick={() => setActiveTab(1)}>Authorization</button>
				<button className={activeTab == 2 ? "selected" : null} onClick={() => setActiveTab(2)}>Headers</button>
				<button className={activeTab == 3 ? "selected" : null} onClick={() => setActiveTab(3)}>Body</button>
			</nav>
			<div>{renderTab()}</div>
		</div>
	)
}

function getActiveTab(activeTab) {
	switch (activeTab) {

	}
}