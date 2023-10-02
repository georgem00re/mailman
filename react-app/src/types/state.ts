
export interface AppState {
	requestUrl: any;
	requestMethod: any,
	response: any,
	requestBody: any,
	requestHeaders: any,
	requestParams: any,
}

export interface Action {
	payload: any;
	type: string;
}