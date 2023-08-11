
import CodeMirror from "@uiw/react-codemirror";
import { useSelector, useDispatch } from "react-redux";
import { updateRequestBody } from "../../state/actions";

export default function RequestBodyTab() {

	const requestBody = useSelector(state => state.requestBody)
	const dispatch = useDispatch()

	const handleTextChange = (e) => {
		dispatch(updateRequestBody(e.target.value))
	}

	return (
		<div className="request-body-tab">
			<CodeMirror readOnly={false} value={requestBody} onChange={handleTextChange}/>
		</div>
	)
}