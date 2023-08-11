
import axios from "axios";

export async function getRequest(url: string) {
	return axios.get(url);
}

export async function postRequest(url: string) {
	return axios.post(url)
}

export async function fetchExampleResponse() {
	return axios.get("http://www.google.com")
}