
import KeyValueTable from "../misc/KeyValueTable";
import { AppState } from "../../types/state";
import { useSelector, useDispatch } from "react-redux";
import { toggleQueryParam, deleteQueryParam, addQueryParam, updateQueryParamKey, updateQueryParamValue } from "../../state/actions"

export default function RequestParamsTab() {

	const queryParams = useSelector((state: AppState) => state.requestParams)
	const dispatch = useDispatch();

	const handleToggle = (index: number) => {
		dispatch(toggleQueryParam(index))
	}

	const handleDelete = (index: number) => {
		dispatch(deleteQueryParam(index))
	}

	const handleAdd = () => {
		dispatch(addQueryParam())
	}

	const handleKeyChange = (index: number, value: string) => {
		dispatch(updateQueryParamKey(index, value))
	}

	const handleValueChange = (index: number, value: string) => {
		dispatch(updateQueryParamValue(index, value))
	}

	return <KeyValueTable 
		title="Query Parameters" 
		keyValuePairs={queryParams} 
		onToggle={(index) => handleToggle(index)} 
		onDelete={(index) => handleDelete(index)} 
		onAdd={handleAdd} 
		onKeyChange={(index, value) => handleKeyChange(index, value)} 
		onValueChange={(index, value) => handleValueChange(index, value)}
		placeholder="Parameter"
		/>
}
