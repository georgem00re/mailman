
import axios from "axios";

// export async function getRequest(url: string) {
// 	return axios.get(url);
// }

// export async function postRequest(url: string) {
// 	return axios.post(url)
// }

export async function fetchExampleResponse() {
	return axios.get("http://localhost:3000", {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
			"Content-Type": "application/json",
		}
	})
}