
import { FaTruck } from "react-icons/Fa"
import Tab from "./Tab";

export default function NoResponseTab() {
	return (
		<Tab>
			<FaTruck/>
			<p style={textStyle}>Enter the URL and click Send to get a response</p>
		</Tab>
	)
}

const textStyle = {
	fontSize: "1rem",
	marginTop: "10px",
}