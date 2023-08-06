
import { Fragment } from "react";

interface KeyValueTableProps {
	title: string;
	keyValuePairs?: KeyValuePair;
}

interface KeyValuePair {
	selected: boolean;
	keyStr: string;
	value: string;
}

export default function KeyValueTable({ title, keyValuePairs }: KeyValueTableProps) {

	const rows = keyValuePairs?.map((element, index) => {
		return (
			<Fragment key={index}>
				<div className="checkbox">
					<input type="checkbox" checked={element.selected}/>
				</div>
				<h1 className="key">{element.keyStr}</h1>
				<h1 className="value ">{element.value}</h1>
			</Fragment>
		)
	})

	return (
		<div className="key-value-table">
			<h1 className="title">{title}</h1>
			<div className="empty-cell"></div>
			<h1 className="table-header">KEY</h1>
			<h1 className="table-header">VALUE</h1>
			{rows}
		</div>
	)
}

