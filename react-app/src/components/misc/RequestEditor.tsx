
import { useState } from "react";
import { AppState } from "../../types/state";
import RequestParamsTab from "../tabs/RequestParamsTab";
import RequestHeadersTab from "../tabs/RequestHeadersTab";
import RequestBodyTab from "../tabs/RequestBodyTab";
import { updateRequestUrl, updateRequestMethod} from "../../state/actions";
import SendRequestButton from "../buttons/SendRequestButton";
import RequestHeader from "../containers/RequestHeader";
import TabNavigator from "./TabNavigator";

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

	return (
		<div className="request-editor" style={style}>
			<RequestHeader/>
			<TabNavigator selected={activeTab} tabs={["Parameters", "Headers", "Body"]} onSelectTab={(index: number) => setActiveTab(index)}/>
			<div>{renderTab()}</div>
		</div>
	)
}

const style = {
	backgroundColor: "#181818"
}

