import * as listeners from "./listeners/index.js";

function router() {
	const path = window.location.pathname;

	switch (path) {
		case "/":
		case "/index.html":
			const listAuctions = listeners.getAuctions();
			listeners.observeAuctions(listAuctions);
			listAuctions();
			break;
	}
}

router();
