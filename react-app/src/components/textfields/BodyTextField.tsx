
import { useDispatch } from "react-redux";
import { updateRequestBody } from "../../state/actions";

export default function BodyTextField({ readOnly = false, value }) {

    const dispatch = useDispatch();

    const onChangeHandler = (val) => {
        dispatch(updateRequestBody(val))
    }

	return <textarea 
        style={textAreaStyle} 
        placeholder="..." 
        readOnly={readOnly} 
        value={value} 
        onChange={(e) => onChangeHandler(e.target.value)}
    />
}

const textAreaStyle = {
	backgroundColor: "transparent",
	resize: "none",
	color: "white",
    padding: "10px",
    paddingLeft: "20px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    borderStyle: "none",
    fontFamily: "Menlo"
}