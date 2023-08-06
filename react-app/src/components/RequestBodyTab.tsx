
import CodeMirror from "@uiw/react-codemirror";

export default function RequestBodyTab() {
	return (
		<div className="request-body-tab">
			<CodeMirror readOnly={false}/>
		</div>
	)
}