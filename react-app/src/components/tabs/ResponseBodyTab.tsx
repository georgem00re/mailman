
import CodeMirror from "@uiw/react-codemirror";

export default function ResponseBodyTab() {
	return (
		<div className="response-body-tab" style={style}>
			<CodeMirror readOnly={true}/>
		</div>
	)
}

const style = {
	height: "100%",
	width: "100%",
	overflow: "scroll"
}