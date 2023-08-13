
import KeyValueTable from "../KeyValueTable";
import { useSelector, useDispatch } from "react-redux";
import { toggleQueryParam, deleteQueryParam, addQueryParam, updateQueryParamKey, updateQueryParamValue } from "../../state/actions"

export default function RequestParamsTab() {

	const queryParams = useSelector(state => state.requestParams)
	const dispatch = useDispatch();

	const handleToggle = (index) => {
		dispatch(toggleQueryParam(index))
	}

	const handleDelete = (index) => {
		dispatch(deleteQueryParam(index))
	}

	const handleAdd = () => {
		dispatch(addQueryParam())
	}

	const handleKeyChange = (index, value) => {
		dispatch(updateQueryParamKey(index, value))
	}

	const handleValueChange = (index, value) => {
		dispatch(updateQueryParamValue(index, value))
	}

	return <KeyValueTable title="Query Params" keyValuePairs={queryParams} onToggle={(index) => handleToggle(index)} onDelete={(index) => handleDelete(index)} onAdd={handleAdd} onKeyChange={(index, value) => handleKeyChange(index, value)} onValueChange={(index, value) => handleValueChange(index, value)}/>
}
