
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

export function addRequestHeader(reqHeader: RequestHeader) {
	return {
		type: "ADD_REQUEST_HEADER",
		payload: reqHeader,
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

export function addQueryParam(queryParam: QueryParam) {
	return {
		type: "ADD_QUERY_PARAM",
		payload: queryParam,
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

