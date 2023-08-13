
import KeyValueTable from "../KeyValueTable";
import { useSelector } from "react-redux";
import { AppState } from "../../types/state";
import { KeyValuePair } from "../../types/requests"

export default function ResponseHeadersTab() {

	const response = useSelector((state: AppState) => state.response);

	const keyValuePairs: KeyValuePair[] | null = Object.entries(response?.headers ?? {}).map(([key, value]) => {
		return { selected: null, keyStr: key, value: value as string }
	})

	return (
		<div>
			<KeyValueTable 
				title="Response Headers" 
				keyValuePairs={keyValuePairs}
				onToggle={() => undefined }
				onKeyChange={() => undefined }
				onValueChange={() => undefined }
				onDelete={() => undefined }
				onAdd={() => undefined }
			/>
		</div>
	)
}