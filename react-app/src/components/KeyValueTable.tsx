
import { Fragment } from "react";
import { BsFillTrashFill, BsPlusSquareFill } from "react-icons/Bs";
import { KeyValuePair } from "../types/requests";

interface KeyValueTableProps {
	title: string;
	keyValuePairs: KeyValuePair[] | null;
	onToggle(index: number): void;
	onKeyChange(index: number, value: string): void;
	onValueChange(index: number, value: string): void;
	onDelete(index: number): void;
	onAdd(): void;
}

export default function KeyValueTable({ title, keyValuePairs, onToggle, onDelete, onKeyChange, onValueChange, onAdd }: KeyValueTableProps) {

	const rows = keyValuePairs?.map((element, index) => {
		return (
			<Fragment key={index}>
				<div className="checkbox">
					<input type="checkbox" disabled={element.selected == null} style={{ opacity: element.selected == null ? "0" : "1" }} checked={element.selected ?? undefined} onClick={() => onToggle(index)}/>
				</div>
				<input className="key" value={element.keyStr} onChange={(e) => onKeyChange(index, e.target.value)} placeholder="Key"/>
				<input className="value" value={element.value} onChange={(e) => onValueChange(index, e.target.value)} placeholder="Value"/>
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
			<button style={{ gridColumn: "1 / -1"}} onClick={onAdd}>
				<BsPlusSquareFill style={{ opacity: "1"}}/>
			</button>
		</div>
	)
}

