
import { FaTrash } from "react-icons/Fa";


export default function DeleteButton({ onClick, selected }) {
	return (
		<button className="checkbox" onClick={onClick}>
			<FaTrash color="#F19896"/>
		</button>
	)
}