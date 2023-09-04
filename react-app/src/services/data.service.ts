
import axios from "axios";
import store from "../state/store";

export async function sendRequest( url: String) {

	const headers = store.getState()

	return axios.get(url, {
		"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
			"Content-Type": "application/json",
	});
}