/***
 * starter upload route (in development)
 */
module.exports = function (req, res, url) {
	if (req.method != "POST" || url.path != "/upload_starter") return;
	res.statusCode = 302;
	res.setHeader("Location", "https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploadFailed");
	res.end();
}
