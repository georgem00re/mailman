
import { useDispatch } from "react-redux";
import { BsFillCaretDownFill } from "react-icons/Bs"

export default function RequestMethodDropdown() {

	const dispatch = useDispatch();

	const handleRequestMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(updateRequestMethod(event.target.value))
	}

	return (
		<button style={style}>
			GET
			<BsFillCaretDownFill style={{ marginLeft: "10px", color: "white"}}/>
		</button>
	)
}

const style = {
	backgroundColor: "#444854",
	color: "white",
	borderStyle: "none",
	padding: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	marginRight: "15px",
	borderRadius: "3px",
	fontFamily: "Inter-Medium",
}
