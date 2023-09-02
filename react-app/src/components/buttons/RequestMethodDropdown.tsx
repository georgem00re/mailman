
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/Bs"
import { Fragment } from "react";
import { updateRequestMethod } from "../../state/actions";

export default function RequestMethodDropdown() {

	const dispatch = useDispatch();
	const [isDropdownVisible, setDropdownVisible] = useState(false)
	const requestMethod = useSelector((state) => state.requestMethod)

	const handleRequestMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(updateRequestMethod(event.target.value))
	}

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible)
	}

	const onClickHandler = () => {
		toggleDropdown()
	}

	return (
		<div style={container}>
			<button style={buttonStyle} onClick={onClickHandler}>
				<p style={text}>{requestMethod}</p>
				<BsFillCaretDownFill style={{ marginLeft: "10px", color: "white"}}/>
			</button>
			<DropdownMenu visible={isDropdownVisible} onButtonClick={() => toggleDropdown()}/>
		</div>
	)
}

export function DropdownMenu({ visible, onButtonClick }) {

	const requestMethods = ["GET", "PUT", "POST", "DELETE"]
	const dispatch = useDispatch();
	
	const onClickHandler = (val) => {
		dispatch(updateRequestMethod(val))
		onButtonClick()
	}

	const elements = requestMethods.map((element, index) => {
		return (
			<button style={requestMethodButtonStyle} key={index} onClick={() => onClickHandler(element)}>
				{element}
			</button>
		)
	})
	
	const getStyle = () => {
		return visible == true ? dropdown : {...dropdown, display: "none"}
	}

	return (
		<div style={getStyle()}>
			{elements}
		</div>
	)
}

const container = {
	position: "relative",
	backgroundColor: "transparent",
	width: "fit-content",
	marginRight: "15px",
}

const buttonStyle = {
	backgroundColor: "#444854",
	color: "white",
	borderStyle: "none",
	padding: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	borderRadius: "3px",
	fontFamily: "Inter-Medium",
	height: "100%",
}

const text = {
	fontFamily: "Inter-Medium"
}

const dropdown = {
	position: "absolute",
	backgroundColor: "#444854",
	marginTop: "10px",
	borderRadius: "3px",
	width: "100%",
}

const requestMethodButtonStyle = {
	borderStyle: "none",
	backgroundColor: "transparent",
	borderRadius: "3px",
	color: "white",
	fontFamily: "Inter-Medium",
	width: "100%",
	display: "flex",
	alignItems: "center",
	padding: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
	cursor: "pointer",
}
