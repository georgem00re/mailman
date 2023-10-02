
import { useSelector } from "react-redux"
import { AppState } from "../../types/state"

export default function ResponseTimeLabel() {

    const response = useSelector((state: AppState) => state.response)
    return (
        <p style={styling}>Time: 100ms</p>
    )
}

const styling = {
    fontSize: "12px",
    marginRight: "20px",
    color: "#757575",
    fontFamily: "Inter-Medium"
}