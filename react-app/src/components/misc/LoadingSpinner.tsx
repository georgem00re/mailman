
export default function LoadingSpinner() {
	return (
		<div style={style}>

		</div>
	)
}

const style = {
	animation: "rotation 1s linear infinite",
	width: "30px",
	height: "30px",
	border: "3px solid #757575",
	borderBottomColor: "transparent",
	borderRadius: "50%",
	display: "inline-block",
	boxSizing: "border-box",
}