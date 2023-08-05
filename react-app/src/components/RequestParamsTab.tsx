
import { Fragment } from "react";

export default function RequestParamsTab() {
	return (
		<div className="request-params-tab">
			<QueryParamsTitle/>
			<QueryParamsTableHeaders/>
			<KeyValuePair selected={true} keyStr="key1" value="value1"/>
			<KeyValuePair selected={true} keyStr="key1" value="value1"/>
			<KeyValuePair selected={true} keyStr="key1" value="value1"/>
			<KeyValuePair selected={true} keyStr="key1" value="value1"/>
		</div>
	)
}

export function QueryParamsTitle() {
	return <h1 className="query-params-title">Query Params</h1>
}

export function QueryParamsTableHeaders() {
	return (
		<Fragment>
			<div className="empty-cell"></div>
			<h1 className="query-params-table-header">KEY</h1>
			<h1 className="query-params-table-header">VALUE</h1>
		</Fragment>
	)
}

interface KeyValuePairProps {
	selected: true;
	key: string;
	value: string;
}

export function KeyValuePair({ selected, keyStr, value }: KeyValuePairProps) {
	return (
		<Fragment>
			<div className="checkbox">
				<input type="checkbox" selected={selected}/>
			</div>
			<h1 className="key">{keyStr}</h1>
			<h1 className="value ">{value}</h1>
		</Fragment>
	)
}