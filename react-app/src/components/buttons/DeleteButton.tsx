
import { FaTrash } from "react-icons/Fa";


export default function DeleteButton({ onClick, selected, disabled = false }) {

	const iconStyle = disabled == true ? { visibility: "hidden" } : {}
	
	const style = { 
		cursor: disabled == true ? "default" : "pointer"
	}

	return (
		<button className="checkbox" onClick={onClick} disabled={disabled} style={style}>
			<FaTrash color="#F19896" style={iconStyle}/>
		</button>
	)
}