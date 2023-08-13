
import { useSelector } from "react-redux";
import { getRequest, postRequest } from "../../services/data.service";

export default function SendRequestButton() {

	const requestUrl = useSelector((state: any) => state.requestUrl)
	const requestMethod = useSelector((state: any) => state.requestMethod);

	const handleClick = () => {
		switch(requestMethod) {
			case "GET":
				getRequest(requestUrl); break;
			case "POST":
				postRequest(requestUrl); break;
			default:
				null;
		}
	}

	return <button style={style} onClick={handleClick}>Send</button>
}

const style = { marginLeft: "10px", backgroundColor: "#467AE9", color: "white", borderStyle: "none", paddingLeft: "30px", paddingRight: "30px", borderRadius: "2px", cursor: "pointer"}