
import SendRequestButton from "../buttons/SendRequestButton";
import RequestMethodDropdown from "../buttons/RequestMethodDropdown";
import RequestUrlTextField from "../textfields/RequestUrlTextField";

export default function RequestHeader() {

	return (
		<div style={style}>
			<RequestMethodDropdown/>
			<RequestUrlTextField/>
			<SendRequestButton/>
		</div>
	)
}

const style = { 
	width: "100%", 
	display: "flex", 
	padding: "20px", 
	boxSizing: "border-box", 
	backgroundColor: "#181818", 
	height: "fit-content" 
}