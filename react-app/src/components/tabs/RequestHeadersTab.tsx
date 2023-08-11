
import KeyValueTable from "../KeyValueTable";
import { useSelector, useDispatch } from "react-redux";
import { toggleRequestHeader, deleteRequestHeader } from "../../state/actions";

export default function RequestHeadersTab() {

	const requestHeaders = useSelector(state => state.requestHeaders);
	const dispatch = useDispatch();

	const handleToggle = (index) => {
		dispatch(toggleRequestHeader(index))
	}

	const handleDelete = (index) => {
		dispatch(deleteRequestHeader(index))
	}

	return <KeyValueTable title="Request Headers" keyValuePairs={requestHeaders} onToggle={(index) => handleToggle(index)} onDelete={(index) => handleDelete(index)}/>
}