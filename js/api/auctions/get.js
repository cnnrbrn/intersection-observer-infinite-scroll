import { BASE_URL, AUCTIONS_LIMIT } from "../../constants/api.js";
import handleErrors from "../handleErrors.js";

export async function get(offset) {
	const url = `${BASE_URL}listings?limit=${AUCTIONS_LIMIT}&offset=${offset}`;
	const response = await fetch(url);

	const json = await response.json();

	if (response.ok) {
		return json;
	}

	handleErrors(json);
}
