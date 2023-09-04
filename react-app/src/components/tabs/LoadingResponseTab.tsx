
import Tab from "./Tab";
import LoadingSpinner from "../misc/LoadingSpinner";

export default function LoadingResponseTab() {
	return (
		<Tab>
			<LoadingSpinner/>
		</Tab>
	)
}

const textStyle = {
	fontSize: "1rem",
	marginTop: "10px",
}