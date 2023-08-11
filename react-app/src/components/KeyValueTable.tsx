
import { Fragment } from "react";
import { BsFillTrashFill } from "react-icons/Bs";

interface KeyValueTableProps {
	title: string;
	keyValuePairs?: KeyValuePair;
	onToggle(index: number): any; 
}

export default function KeyValueTable({ title, keyValuePairs, onToggle, onDelete }: KeyValueTableProps) {

	const rows = keyValuePairs?.map((element, index) => {
		return (
			<Fragment key={index}>
				<div className="checkbox">
					<input type="checkbox" disabled={element.selected == null} style={{ opacity: element.selected == null ? "0" : "1" }} checked={element.selected} onClick={() => onToggle(index)}/>
				</div>
				<h1 className="key">{element.keyStr}</h1>
				<h1 className="value ">{element.value}</h1>
				<button onClick={() => onDelete(index)}>
					<BsFillTrashFill/>
				</button>
			</Fragment>
		)
	})

	return (
		<div className="key-value-table">
			<h1 className="title">{title}</h1>
			<div className="checkbox">
				<input type="checkbox" disabled style={{ opacity: "0" }}/>
			</div>
			<h1 className="table-header">KEY</h1>
			<h1 className="table-header">VALUE</h1>
			<button disabled>
					<BsFillTrashFill style={{ opacity: "0"}}/>
			</button>
			{rows}
		</div>
	)
}

