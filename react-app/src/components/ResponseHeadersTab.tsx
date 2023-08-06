
import KeyValueTable from "./KeyValueTable";

export default function ResponseHeadersTab() {

	const keyValuePairs = [
		{ keyStr: "Content-Length", value: "0", selected: false },
		{ keyStr: "Connection", value: "keep-alive", selected: false },
	]

	return (
		<div>
			<KeyValueTable title="Response Headers" keyValuePairs={keyValuePairs}/>
		</div>
	)
}