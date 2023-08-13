
import { MdOutlineCookie } from "react-icons/Md"

export default function ResponseCookiesTab() {
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontSize: "3rem", height: "100%"}}>
			<MdOutlineCookie/>
			<h1 style={{ fontSize: "1rem", margin: "10px" }}>No cookies received from the server</h1>
			<p style={{ fontSize: "0.9rem" }}>All your cookies and their associated domains will appear here.</p>
		</div>
	)
}