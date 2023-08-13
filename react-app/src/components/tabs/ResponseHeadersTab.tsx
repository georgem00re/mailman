
import KeyValueTable from "../KeyValueTable";
import { useSelector } from "react-redux";

export default function ResponseHeadersTab() {

	// const keyValuePairs = [
	// 	{ keyStr: "Content-Length", value: "0", selected: false },
	// 	{ keyStr: "Connection", value: "keep-alive", selected: false },
	// ]

	const response = useSelector(state => state.response);


	const keyValuePairs = Object.entries(response?.headers ?? {}).map(([key, value], index) => {
		return { selected: null, keyStr: key, value: value }
	})


	return (
		<div>
			<KeyValueTable title="Response Headers" keyValuePairs={keyValuePairs}/>
		</div>
	)
}