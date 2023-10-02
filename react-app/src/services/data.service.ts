
import axios from "axios";

export async function sendRequest(store) {
	const { requestUrl, requestMethod, requestBody, requestHeaders, requestParams } = store.getState();
	return axios.request({
		url: requestUrl,
		method: requestMethod,
		headers: requestHeaders.toObject(),
		params: requestParams.toObject(),
		data: { text: "some-text" },
	});
}

Array.prototype.toObject = function() {
	const obj = {}
	this.filter((element) => element.selected).forEach((element) => {
		obj[element.keyStr] = element.value
	})
	return obj;
}
