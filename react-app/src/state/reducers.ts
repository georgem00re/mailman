
import { RequestHeader, QueryParam } from "../types/requests"
import { mockRequestHeaders, mockQueryParams } from "./mockState";

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

export function requestBodyReducer(state: string = "testing", action: Action) {
	if (action.type === "UPDATE_REQUEST_BODY") {
		return action.payload;
	} else {
		return state;
	}
}

export function requestHeadersReducer(state: RequestHeader[] = mockRequestHeaders, action: Action) {
	if (action.type === "ADD_REQUEST_HEADER") {
		return [ ...state, action.payload ]
	} else if (action.type === "DELETE_REQUEST_HEADER") {
		return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
	} else if (action.type === "TOGGLE_REQUEST_HEADER") {
		return state.map((element, index) => {
			if (index == action.payload) return { ...element, selected: !element.selected }
			else return element;
		})
	} else {
		return state;
	}
}

export function requestParamsReducer(state: QueryParam[] = mockQueryParams, action: Action) {
	if (action.type === "ADD_QUERY_PARAM") {
		return [ ...state, state[action.payload] ]

	} else if (action.type === "DELETE_QUERY_PARAM") {
		return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

	} else if (action.type === "TOGGLE_QUERY_PARAM") {
		
		return state.map((element, index) => {
			if (index == action.payload) return { ...element, selected: !element.selected }
			else return element;
		})

	} else {
		return state;
	}
}

export function responseReducer(state = null, action: Action) {
	if (action.type === "UPDATE_RESPONSE") {
		return action.payload;
	} else {
		return state;
	}
}