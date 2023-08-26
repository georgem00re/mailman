
import { useSelector } from "react-redux"
import { AppState } from "../../types/state"

export default function ResponseStatusLabel() {
    const response = useSelector((state: AppState) => state.response)

    if (response == null) return null
    return (
        <p style={styling}>Status: {response.status}</p>
    )
}

const styling = {
    fontSize: "12px",
    marginRight: "20px",
}