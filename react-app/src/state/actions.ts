
import { RequestHeader, QueryParam } from "../types/requests";

export function updateRequestUrl(str: string) {
	return {
		type: "UPDATE_REQUEST_URL",
		payload: str,
	};
}

export function updateRequestMethod(str: string) {
	return {
		type: "UPDATE_REQUEST_METHOD",
		payload: str,
	}
}

export function updateRequestBody(str: string) {
	return {
		type: "UPDATE_REQUEST_BODY",
		payload: str,
	}
}

export function updateResponse(res: object) {
	return {
		type: "UPDATE_RESPONSE",
		payload: res,
	}
}

export function addRequestHeader() {
	return {
		type: "ADD_REQUEST_HEADER",
		payload: { selected: false, keyStr: "", value: "" },
	}
}

export function deleteRequestHeader(index: number) {
	return {
		type: "DELETE_REQUEST_HEADER",
		payload: index,
	}
}

export function toggleRequestHeader(index: number) {
	return {
		type: "TOGGLE_REQUEST_HEADER",
		payload: index
	}
}

export function addQueryParam() {
	return {
		type: "ADD_QUERY_PARAM",
		payload: { selected: false, keyStr: "", value: "" },
	}
}

export function deleteQueryParam(index: number) {
	return {
		type: "DELETE_QUERY_PARAM",
		payload: index,
	}
}

export function toggleQueryParam(index: number) {
	return {
		type: "TOGGLE_QUERY_PARAM",
		payload: index
	}
}

export function updateQueryParamKey(index: number, value: string) {
	return {
		type: "UPDATE_QUERY_PARAM_KEY",
		payload: { index, value }
	}
}

export function updateQueryParamValue(index: number, value: string) {
	return {
		type: "UPDATE_QUERY_PARAM_VALUE",
		payload: { index, value }
	}
}

export function updateRequestHeaderValue(index: number, value: string) {
	return {
		type: "UPDATE_REQUEST_HEADER_VALUE",
		payload: { index, value }
	}
}

export function updateRequestHeaderKey(index: number, value: string) {
	return {
		type: "UPDATE_REQUEST_HEADER_KEY",
		payload: { index, value }
	}
}

