
import { FaTruck } from "react-icons/Fa"

export default function NavigationBar() {
	return (
		<nav style={style}>
			Mailman
			<FaTruck style={{ marginLeft: "10px", color: "white"}}/>
		</nav>
	)
}

const style = {
	width: "100%",
	height: "100%",
	backgroundColor: "#181818",
	display: "flex",
	alignItems: "center",
	fontFamily: "Avenir Heavy",
	paddingLeft: "20px",
	boxSizing: "border-box",
	color: "white",
	fontFamily: "Inter-Regular",
	borderBottomStyle: "solid",
	borderWidth: "1px",
	borderColor: "#262626",
}