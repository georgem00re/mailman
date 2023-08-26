
import { MdAdd } from "react-icons/Md"

export default function AddButton({ onClick }) {
	return (
		<button style={style} onClick={onClick}>
			<MdAdd color=""/>
		</button>
	)
}

const style = {
	color: "#757575",
	fontSize: "20px",
	cursor: "pointer",

}