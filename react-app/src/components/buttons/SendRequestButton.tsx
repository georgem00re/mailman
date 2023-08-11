
import { getRequest } from "../../services/data.service";
import { useSelector } from "react-redux";

export default function SendRequestButton() {

	const requestUrl = useSelector(state => state.requestUrl)
	const requestMethod = useSelector(state => state.requestMethod);

	const handleClick = () => {
		switch(requestMethod) {
			case "GET":
				getRequest(requestUrl);
			case "POST":
				postRequest(requestUrl);
			default:
				null;
		}
	}

	return <button style={style} onClick={handleClick}>Send</button>
}

const style = { marginLeft: "10px", backgroundColor: "#467AE9", color: "white", borderStyle: "none", paddingLeft: "30px", paddingRight: "30px", borderRadius: "2px", cursor: "pointer"}