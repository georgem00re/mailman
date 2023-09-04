
import { Fragment, useState } from "react";
import ResponseBodyTab from "../tabs/ResponseBodyTab";
import ResponseCookiesTab from "../tabs/ResponseCookiesTab";
import ResponseHeadersTab from "../tabs/ResponseHeadersTab";
import NoResponseTab from "../tabs/NoResponseTab";
import { useSelector } from "react-redux";
import { AppState } from "../../types/state";
import ResponseStatusLabel from "../labels/ResponseStatusLabel";
import ResponseTimeLabel from "../labels/ResponseTimeLabel";
import TabNavigator from "./TabNavigator";
import LoadingResponseTab from "../tabs/LoadingResponseTab";

export default function ResponseViewer() {

	const [activeTab, setActiveTab] = useState(0);
	const response = useSelector((state: AppState) => state.response)
	const responseLoading = useSelector((state: AppState) => state.responseLoading)

	const renderTab = () => {
		if (responseLoading) return <LoadingResponseTab/>
		if (response == null) return <NoResponseTab/>
		switch(activeTab) {
			case 0: return <ResponseBodyTab/>;
			case 1: return <ResponseCookiesTab/>;
			case 2: return <ResponseHeadersTab/>;
			default: return <ResponseBodyTab/>;
		}
	}
	console.log(response)
	const headersText = response == null ? "Headers" : `Headers (${Object.entries(response?.headers ?? {}).length})`

	return (
		<div className="response-viewer" style={style}>
			<TabNavigator tabs={["Body", "Cookies", headersText]} selected={activeTab} onSelectTab={(index) => setActiveTab(index)}>
				<ResponseStatusLabel/>
			</TabNavigator>
			<div style={{ width: "100%", height: "100%"}}>{renderTab()}</div>
		</div>
	)
}


const style = {
	width: "100%",
	maxWidth: "100%",
	borderTopStyle: "solid",
	borderWidth: "1px",
	borderTopColor: "#262626",
	backgroundColor: "#181818",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
}

