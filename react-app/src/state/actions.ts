
export function updateRequestUrl(str: string) {
	return {
		type: "UPDATE_REQUEST_URL",
		payload: str,
	};
}

export function updateRequestMethod(str: string) {
	return {
		type: "UPDATE_REQUEST_METHOD",
		patload: str,
	}
}