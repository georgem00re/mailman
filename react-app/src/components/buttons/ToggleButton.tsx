
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/Im";


export default function ToggleButton({ selected, onClick }) {

	const icon = selected == true ? <ImCheckboxChecked color="#D1F4BC"/> : <ImCheckboxUnchecked color="#D1F4BC"/>

	return (
		<button className="checkbox" disabled={selected == null} style={{ opacity: selected == null ? "0" : "1" }} onClick={onClick}>
			{icon}
		</button>
	)
}