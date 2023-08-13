
import KeyValueTable from "../KeyValueTable";
import { AppState } from "../../types/state"
import { useSelector, useDispatch } from "react-redux";
import { toggleRequestHeader, deleteRequestHeader, updateRequestHeaderKey, updateRequestHeaderValue, addRequestHeader } from "../../state/actions";

export default function RequestHeadersTab() {

	const requestHeaders = useSelector((state: AppState) => state.requestHeaders);
	const dispatch = useDispatch();

	const handleToggle = (index: number) => {
		dispatch(toggleRequestHeader(index))
	}

	const handleDelete = (index: number) => {
		dispatch(deleteRequestHeader(index))
	}

	const handleKeyChange = (index: number, value: string) => {
		dispatch(updateRequestHeaderKey(index, value))
	}

	const handleValueChange = (index: number, value: string) => {
		dispatch(updateRequestHeaderValue(index, value))
	}

	const handleAdd = () => {
		dispatch(addRequestHeader())
	}

	return <KeyValueTable title="Request Headers" keyValuePairs={requestHeaders} onToggle={(index) => handleToggle(index)} onDelete={(index) => handleDelete(index)} onKeyChange={(index, value) => handleKeyChange(index, value)} onValueChange={(index, value) => handleValueChange(index, value)} onAdd={handleAdd}/>
}