
import { useDispatch, useSelector } from "react-redux";
import { updateRequestUrl } from "../../state/actions";

export default function RequestUrlTextField() {

	const dispatch = useDispatch();
	const requestUrl = useSelector((state: AppState) => state.requestUrl)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateRequestUrl(event.target.value))
	}

	return (
		<input type="text" style={style} placeholder="URL" value={requestUrl} onChange={handleInputChange}/>
	)
}

const style = {
	width: "100%",
	backgroundColor: "#1C1C1E",
	color: "white",
	padding: "10px",
	paddingLeft: "15px",
	outline: "none",
	borderStyle: "solid",
	borderColor: "#444854",
	borderWidth: "1px",
	borderRadius: "3px",
	fontFamily: "Inter-Medium",
}
