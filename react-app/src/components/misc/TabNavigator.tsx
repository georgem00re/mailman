
export default function TabNavigator({ selected, tabs, onSelectTab, children }) {

	const getStyle = (index) => {
		if (selected == index) {
			return {...buttonStyle, ...selectedStyle}
		} else {
			return buttonStyle
		}
	}

	const getButtons = tabs.map((element, index) => {
		return <button style={getStyle(index)} onClick={() => onSelectTab(index)}>{element}</button>
	})

	return (
		<nav style={navStyle}>
			<div>{getButtons}</div>
			<div style={{ display: "flex", justifyContent: "center", }}>{children}</div>
		</nav>
	)
}

const navStyle = {
	paddingLeft: "20px",
	width: "100%",
	backgroundColor: "#181818",
	boxSizing: "border-box",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	borderBottomStyle: "solid",
	borderWidth: "1px",
	borderColor: "#262626",
}

const buttonStyle = {
	backgroundColor: "transparent",
	padding: "10px",
	paddingLeft: "0px",
	paddingRight: "0px",
	cursor: "pointer",
	borderStyle: "none",
	borderWidth: "2px",
	borderBottomStyle: "solid",
	borderBottomColor: "transparent",
	fontFamily: "Inter-Medium",
	color: "#757575",
	marginRight: "30px",
}

const selectedStyle = {
	borderBottomStyle: "solid",
	borderBottomColor: "orange",
	color: "white"
}