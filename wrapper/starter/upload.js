/***
 * starter upload route (in development)
 */
const starter = require("./main");
const loadPost = require("../request/post_body");

function createId() {
	return Math.random().toString(16).substring(2, 9);
}

module.exports = function (req, res, url) {
	if (req.method != "POST") {
		switch (url.path) {
			case "/upload_starter": {
				const id = createId();
				const url = `https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploaded?returnMessage=Your Starter Could Not Be Uploaded! Id: ${id}`;
				res.statusCode = 302;
				res.setHeader("Location", url);
				res.end();
			}
		}
	}
	return true;
}
