
import KeyValueTable from "./KeyValueTable";

export default function RequestHeadersTab() {

	const keyValuePairs = [
		{ keyStr: "Content-Length", value: "0", selected: false },
		{ keyStr: "Connection", value: "keep-alive", selected: false },
	]

	return <KeyValueTable title="Request Headers" keyValuePairs={keyValuePairs}/>
}