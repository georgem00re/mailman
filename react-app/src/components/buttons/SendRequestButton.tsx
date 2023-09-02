
import { useSelector, useDispatch } from "react-redux";
import { sendRequest } from "../../services/data.service";
import { updateResponse } from "../../state/actions";
import { BsSendFill } from "react-icons/Bs";

export default function SendRequestButton() {

	const dispatch = useDispatch();
	const requestUrl = useSelector((state: any) => state.requestUrl)
	const requestMethod = useSelector((state: any) => state.requestMethod);

	const onClickHandler = () => {
		sendRequest(requestUrl).then((res) => {
			dispatch(updateResponse(res));
		})
	}

	const getStyle = () => {
		return requestUrl == "" ? {...style, ...disabled} : style
	}

	return (
		<button style={getStyle()} onClick={onClickHandler} disabled={requestUrl == ""}>
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
	fontFamily: "Inter-Medium",
}

const disabled = {
	opacity: "0.3"
}
