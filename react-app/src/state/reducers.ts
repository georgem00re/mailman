
interface Action {
	payload: object;
	type: string;
}

export function requestUrlReducer(state = "", action: Action) {
	if (action.type === "UPDATE_REQUEST_URL") {
		return action.payload;
	} else {
		return state;
	}
}

export function requestMethodReducer(state = "GET", action: Action) {
	if (action.type === "UPDATE_REQUEST_METHOD") {
		return action.payload;
	} else {
		return state;
	}
}

export function responseReducer(state = "", action: Action) {
	if (action.type === "UPDATE_RESPONSE") {
		return action.payload;
	} else {
		return state;
	}
}