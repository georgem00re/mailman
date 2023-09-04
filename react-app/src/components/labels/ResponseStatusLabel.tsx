
import { useSelector } from "react-redux"
import { AppState } from "../../types/state"

export default function ResponseStatusLabel() {
    const response = useSelector((state: AppState) => state.response)

    const getText = () => {
        if (response.status == 200) return "200 OK"
        else if (response.status == 404) return "404 NOT FOUND"
        else return response.status
    }

    const getColour = () => {
        if (response.status == 200) return "#D1F4BC"
        else return "#757575"
    }

    if (response == null) return null
    return (
        <p style={{...styling, color: getColour()}}>{getText()}</p>
    )
}

const styling = {
    fontSize: "12px",
    marginRight: "20px",
    fontFamily: "Inter-Medium",
}