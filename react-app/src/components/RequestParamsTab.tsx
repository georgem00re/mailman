
import KeyValueTable from "./KeyValueTable";

export default function RequestParamsTab() {

	const keyValuePairs = [
		{ keyStr: "page_number", value: "3", selected: false },
		{ keyStr: "limit", value: "500", selected: false },
	]

	return <KeyValueTable title="Query Params" keyValuePairs={keyValuePairs}/>
}
