
import { TbTruckDelivery } from "react-icons/Tb";

export default function NoResponseTab() {
	return (
		<div className="no-response-tab" style={style}>
			<TbTruckDelivery/>
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
}

const textStyle = {
	fontSize: "1rem",
	marginTop: "10px",
}