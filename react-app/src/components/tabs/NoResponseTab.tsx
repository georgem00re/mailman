
import { FaTruck } from "react-icons/Fa"

export default function NoResponseTab() {
	return (
		<div className="no-response-tab" style={style}>
			<FaTruck/>
			<p style={textStyle}>Enter the URL and click Send to get a response</p>
		</div>
	)
}

const style = {
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

const textStyle = {
	fontSize: "1rem",
	marginTop: "10px",
}