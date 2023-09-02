
import { useSelector, useDispatch } from "react-redux";
import { updateRequestBody } from "../../state/actions";
import { AppState } from "../../types/state";
import ContentTypeDropdown from "../buttons/ContentTypeDropdown";
import BodyTextField from "../textfields/BodyTextField";

export default function RequestBodyTab() {

	const requestBody = useSelector((state: AppState) => state.requestBody)
	const dispatch = useDispatch()

	// const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	dispatch(updateRequestBody(event.target.value))
	// }

	const handleTextChange = (value: string) => {
		dispatch(updateRequestBody(value))
	}

	return (
		<div className="request-body-tab">
			<div style={containerStyle}>
				<h1 style={textStyle}>Request Body</h1>
			</div>
			<BodyTextField value={requestBody}/>
		</div>
	)
}

const containerStyle = {
	borderBottomStyle: "solid",
	borderWidth: "1px",
	borderColor: "#262626",
	display: "flex",
	alignItems: "center",
}

const textStyle = {
	padding: "7px",
	paddingLeft: "20px",
	fontFamily: "Inter-Regular",
	fontSize: "0.85rem",
	color: "#757575",
}
