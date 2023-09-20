import { displayAuctions } from "../../ui/templates/auctions/index.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { toggleLoadingIndicator } from "../../ui/helpers/toggleLoadingIndicator.js";
import * as api from "../../api/auctions/index.js";
import { AUCTIONS_LIMIT } from "../../constants/api.js";

export function getAuctions() {
	const container = document.querySelector("#auctions");

	let offset = 0;

	return async function listAuctions() {
		try {
			toggleLoadingIndicator(container);
			document.querySelector("#auction-end").style.display = "none";
			const auctions = await api.get(offset);
			offset = offset + AUCTIONS_LIMIT;
			displayAuctions(auctions, container);
			listAuctions.stopObserving = auctions.length === 0 || auctions.length < AUCTIONS_LIMIT;
		} catch (error) {
			displayMessage("danger", error.message, container);
		} finally {
			toggleLoadingIndicator(container);
			document.querySelector("#auction-end").style.display = "block";
		}
	};
}
