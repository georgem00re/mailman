
import { MdOutlineCookie } from "react-icons/Md"

export default function ResponseCookiesTab() {
	return (
		<div style={style}>
			<MdOutlineCookie color={"#757575"}/>
			<h1 style={h1Style}>No cookies received from the server</h1>
			<p style={pStyle}>All your cookies and their associated domains will appear here.</p>
		</div>
	)
}

const style = { 
	display: "flex", 
	justifyContent: "center", 
	alignItems: "center", 
	flexDirection: "column", 
	fontSize: "3rem", 
	height: "100%",
	backgroundColor: "#181818"
}

const h1Style = { 
	fontSize: "1rem", 
	margin: "10px",
	color: "#757575"
}

const pStyle = {
	fontSize: "0.9rem",
	color: "#757575"
}