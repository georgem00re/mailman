
import { MdAdd } from "react-icons/Md"

export default function AddButton({ onClick, disabled }) {

	const getStyle = () => {
		if (disabled) return {...style, visibility: "hidden"}
		else return style
	}

	return (
		<button style={getStyle()} onClick={onClick} disabled={disabled}>
			<MdAdd color=""/>
		</button>
	)
}

const style = {
	color: "#757575",
	fontSize: "20px",
	cursor: "pointer",
}
