
import { useSelector } from "react-redux";
import { getRequest, postRequest } from "../../services/data.service";
import { BsSendFill } from "react-icons/Bs";

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

	return (
		<button style={style} onClick={handleClick}>
			Send
			<BsSendFill style={{ marginLeft: "10px"}}/>
		</button>
	)
}

const style = { 
	backgroundColor: "#444854",
	color: "white",
	borderStyle: "none",
	paddingLeft: "25px", 
	paddingRight: "25px",
	marginLeft: "15px",
	cursor: "pointer",
	fontFamily: "Avenir Medium",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	borderRadius: "3px",
	fontFamily: "Inter-Medium"
}