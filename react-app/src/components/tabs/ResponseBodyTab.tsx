
import BodyTextField from "../textfields/BodyTextField";
import { useSelector } from "react-redux";

export default function ResponseBodyTab() {

	const response = useSelector((state) => state.response)

	return (
		<div className="response-body-tab" style={style}>
			<BodyTextField readOnly={true} value={response.data}/>
		</div>
	)
}

const style = {
	height: "100%",
	width: "100%",
	overflow: "none",
	backgroundColor: "#181818",
	boxSizing: "border-box",
}