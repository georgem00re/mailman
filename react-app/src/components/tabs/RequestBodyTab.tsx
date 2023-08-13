
import CodeMirror from "@uiw/react-codemirror";
import { useSelector, useDispatch } from "react-redux";
import { updateRequestBody } from "../../state/actions";
import { AppState } from "../../types/state";

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
			<CodeMirror readOnly={false} value={requestBody} onChange={handleTextChange}/>
		</div>
	)
}