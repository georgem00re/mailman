
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/Im";


export default function ToggleButton({ selected, onClick, disabled = false }) {

	const iconStyle = disabled == true ? { visibility: "hidden" } : {}
	const icon = selected == true ? <ImCheckboxChecked color="#D1F4BC" style={iconStyle}/> : <ImCheckboxUnchecked color="#D1F4BC" style={iconStyle}/>
	
	const style = { 
		cursor: disabled == true ? "default" : "pointer"
	}


	return (
		<button 
			className="checkbox" 
			disabled={disabled} 
			style={style} 
			onClick={onClick}>
			{icon}
		</button>
	)
}