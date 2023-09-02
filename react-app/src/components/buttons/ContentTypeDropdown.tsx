
import { BsFillCaretDownFill } from "react-icons/Bs"

export default function ContentTypeDropdown() {
	return (
		<button style={style}>
			None
			<BsFillCaretDownFill style={{ marginLeft: "5px" }}/>
		</button>
	)
}

const style = {
	borderStyle: "none",
	backgroundColor: "transparent",
	borderRadius: "3px",
	color: "white",
	fontFamily: "Inter-Regular",
	display: "flex",
	alignItems: "center",
	padding: "5px",
	paddingLeft: "10px",
	paddingRight: "10px",
}