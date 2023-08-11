
import KeyValueTable from "../KeyValueTable";
import { useSelector, useDispatch } from "react-redux";
import { toggleQueryParam, deleteQueryParam } from "../../state/actions"

export default function RequestParamsTab() {

	const queryParams = useSelector(state => state.requestParams)
	const dispatch = useDispatch();

	const handleToggle = (index) => {
		dispatch(toggleQueryParam(index))
	}

	const handleDelete = (index) => {
		dispatch(deleteQueryParam(index))
	}

	return <KeyValueTable title="Query Params" keyValuePairs={queryParams} onToggle={(index) => handleToggle(index)} onDelete={(index) => handleDelete(index)}/>
}
