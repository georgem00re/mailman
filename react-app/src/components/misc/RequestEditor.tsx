
import { useState } from "react";
import { AppState } from "../../types/state";
import RequestParamsTab from "../tabs/RequestParamsTab";
import RequestHeadersTab from "../tabs/RequestHeadersTab";
import RequestBodyTab from "../tabs/RequestBodyTab";
import { updateRequestUrl, updateRequestMethod} from "../../state/actions";
import SendRequestButton from "../buttons/SendRequestButton";
import RequestHeader from "../containers/RequestHeader";

export default function RequestEditor() {

	const [activeTab, setActiveTab] = useState(0);

	const renderTab = () => {
		switch (activeTab) {
			case 0: return <RequestParamsTab/>;
			case 1: return <RequestHeadersTab/>;
			case 2: return <RequestBodyTab/>;
			default: return <RequestParamsTab/>;
		}
	}

	const getStyle = (index) => {
		if (activeTab == index) {
			return {...buttonStyle, ...selected}
		} else {
			return buttonStyle
		}
	}

	return (
		<div className="request-editor" style={style}>
			<RequestHeader/>
			<nav style={navStyle}>
				<button style={getStyle(0)} onClick={() => setActiveTab(0)}>Parameters</button>
				<button style={getStyle(1)} className={activeTab == 1 ? "selected" : undefined} onClick={() => setActiveTab(1)}>Headers</button>
				<button style={getStyle(2)} className={activeTab == 2 ? "selected" : undefined} onClick={() => setActiveTab(2)}>Body</button>
			</nav>
			<div>{renderTab()}</div>
		</div>
	)
}

const style = {
	backgroundColor: "#181818"
}

const navStyle = {
	paddingLeft: "20px",
	width: "100%",
	backgroundColor: "#181818",
	boxSizing: "border-box",
	display: "flex",
	alignItems: "center",
	borderBottomStyle: "solid",
	borderWidth: "1px",
	borderColor: "#262626",
}

const buttonStyle = {
	backgroundColor: "transparent",
	padding: "10px",
	paddingLeft: "0px",
	paddingRight: "0px",
	cursor: "pointer",
	borderStyle: "none",
	borderWidth: "2px",
	borderBottomStyle: "solid",
	borderBottomColor: "transparent",
	fontFamily: "Inter-Medium",
	color: "#757575",
	marginRight: "30px",
}

const selected = {
	borderBottomStyle: "solid",
	borderBottomColor: "orange",
	color: "white"
}
