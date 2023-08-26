
import { Fragment } from "react";
import { BsPlusSquareFill } from "react-icons/Bs";
import { KeyValuePair } from "../../types/requests";
import ToggleButton from "../buttons/ToggleButton";
import DeleteButton from "../buttons/DeleteButton";
import AddButton from "../buttons/AddButton";

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
				<input className="key" value={element.keyStr} onChange={(e) => onKeyChange(index, e.target.value)} placeholder={`Parameter ${index + 1}`}/>
				<input className="value" value={element.value} onChange={(e) => onValueChange(index, e.target.value)} placeholder={`Value ${index + 1}`}/>
				<ToggleButton selected={element.selected} onClick={() => onToggle(index)}/>
				<DeleteButton onClick={() => onDelete(index)}/>
			</Fragment>
		)
	})

	return (
		<div className="key-value-table">
			<div className="title">
				<h1>{title}</h1>
				<AddButton onClick={() => alert("Working!")} onClick={onAdd}/>
			</div>
			{rows}
		</div>
	)
}

