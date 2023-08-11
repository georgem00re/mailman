
import { RequestHeader, QueryParam } from "../types/requests"

export const mockRequestHeaders: RequestHeader[] = [
	{ selected: false, keyStr: "Content-Length", value: "0" },
	{ selected: true, keyStr: "Content-Length", value: "0" },
	{ selected: null, keyStr: "Content-Length", value: "0" },
	{ selected: true, keyStr: "Content-Length", value: "0" },
]

export const mockQueryParams: QueryParam[] = [
	{ selected: false, keyStr: "page_number", value: "1" },
]