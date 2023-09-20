export function displayAuctions(auctions, container) {
	const html = auctions.map((auction) => createAuction(auction));
	container.append(...html);
}

function createAuction({ title }) {
	const div = document.createElement("div");
	div.innerText = title;
	div.classList.add("auction");
	return div;
}
