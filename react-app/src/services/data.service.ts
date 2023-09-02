
import axios from "axios";

export async function sendRequest( url: String) {
	return axios.get(url, {
		"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
			"Content-Type": "application/json",
	});
}