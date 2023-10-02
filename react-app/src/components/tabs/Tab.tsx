
import { FaTruck } from "react-icons/Fa"

export default function NoResponseTab({ children }) {
	return (
		<div style={tabStyle}>
			{children}
		</div>
	)
}

const tabStyle = {
	height: "100%",
	width: "100%",
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	fontSize: "5rem",
	color: "#757575"
}
