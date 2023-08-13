
import { useState } from "react";
import { AppState } from "../types/state";
import RequestParamsTab from "./tabs/RequestParamsTab";
import RequestHeadersTab from "./tabs/RequestHeadersTab";
import RequestBodyTab from "./tabs/RequestBodyTab";
import { useSelector, useDispatch } from "react-redux";
import { updateRequestUrl, updateRequestMethod} from "../state/actions";
import SendRequestButton from "./buttons/SendRequestButton";

export default function RequestEditor() {

	const [activeTab, setActiveTab] = useState(0);
	const requestUrl = useSelector((state: AppState) => state.requestUrl)
	const dispatch = useDispatch();

	const renderTab = () => {
		switch (activeTab) {
			case 0: return <RequestParamsTab/>;
			case 1: return <RequestHeadersTab/>;
			case 2: return <RequestBodyTab/>;
			default: return <RequestParamsTab/>;
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateRequestUrl(event.target.value))
	}

	const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(updateRequestMethod(event.target.value))
	}

	return (
		<div className="request-editor">
			<div style={{ width: "100%", display: "flex", padding: "20px", boxSizing: "border-box", }}>
				<select name="methods" id="methods" onChange={handleMethodChange}>
					<option value="GET">GET</option>
					<option value="POST">POST</option>
					<option value="PUT">PUT</option>
					<option value="DELETE">DELETE</option>
				</select>
				<input type="text" style={{ width: "100%" }} placeholder="Enter URL or paste text here" value={requestUrl} onChange={handleInputChange}/>
				<SendRequestButton/>
			</div>
			<nav>
				<button className={activeTab == 0 ? "selected" : undefined} onClick={() => setActiveTab(0)}>Params</button>
				<button className={activeTab == 1 ? "selected" : undefined} onClick={() => setActiveTab(1)}>Headers</button>
				<button className={activeTab == 2 ? "selected" : undefined} onClick={() => setActiveTab(2)}>Body</button>
			</nav>
			<div>{renderTab()}</div>
		</div>
	)
}
