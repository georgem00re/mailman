
import { RequestHeader, QueryParam } from "../types/requests"
import { Action } from "../types/state";
import { mockRequestHeaders, mockQueryParams } from "./mockState";
import { addState, deleteState, toggleState, updateKey, updateValue } from "./helpers";

export function requestUrlReducer(state = "", action: Action) {
	switch(action.type) {
		case "UPDATE_REQUEST_URL": return action.payload;
		default: return state;
	}
}

export function requestMethodReducer(state = "GET", action: Action) {
	switch(action.type) {
		case "UPDATE_REQUEST_METHOD": return action.payload;
		default: return state;
	}
}

export function requestBodyReducer(state: string = "testing", action: Action) {
	switch(action.type) {
		case "UPDATE_REQUEST_BODY": return action.payload;
		default: return state;
	}
}

export function requestHeadersReducer(state: RequestHeader[] = mockRequestHeaders, action: Action) {
	switch(action.type) {
		case "ADD_REQUEST_HEADER": return addState(state, action);
		case "DELETE_REQUEST_HEADER": return deleteState(state, action);
		case "TOGGLE_REQUEST_HEADER": return toggleState(state, action);
		case "UPDATE_REQUEST_HEADER_KEY": return updateKey(state, action);
		case "UPDATE_REQUEST_HEADER_VALUE": return updateValue(state, action);
		default: return state;
	}
}

export function requestParamsReducer(state: QueryParam[] = mockQueryParams, action: Action) {
	switch(action.type) {
		case "ADD_QUERY_PARAM": return addState(state, action);
		case "DELETE_QUERY_PARAM": return deleteState(state, action);
		case "TOGGLE_QUERY_PARAM": return toggleState(state, action);
		case "UPDATE_QUERY_PARAM_KEY": return updateKey(state, action);
		case "UPDATE_QUERY_PARAM_VALUE": return updateValue(state, action);
		default: return state;
	}
}

export function responseReducer(state = null, action: Action) {
	switch(action.type) {
		case "UPDATE_RESPONSE": return action.payload;
		default: return state;
	}
}