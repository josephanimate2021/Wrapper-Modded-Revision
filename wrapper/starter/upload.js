/***
 * starter upload route
 */
const formidable = require("formidable");
const fs = require("fs");
const starter = require("./main");
const fUtil = require("../fileUtil");

module.exports = function (req, res, url) {
	if (req.method != "POST" || url.path != "/upload_starter") return;
	new formidable.IncomingForm().parse(req, (e, f, files) => {
		const path = files.import.path, buffer = fs.readFileSync(path);
		var id = fUtil.generateId();
		var data = "req.body";
		var body = Buffer.from(data.body_zip, "base64");
		var thumb = Buffer.from(data.thumbnail_large, "base64");
		const meta = {
			id: id,
			enc_asset_id: id,
			type: "movie",
			title: `Uploaded Starter ${id}`,
			published: "",
			share: {
				type: "none"
			},
			tags: "",
			file: `${id}.xml`
		};
		try {
			// save the starter
			const id = starter.save(buffer, body, thumb, meta, id);
			const url = `https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploaded?returnMessage=Your Starter Has Been Uploaded! Id: ${id}`;
			fs.unlinkSync(path);
			// redirect the user
			res.statusCode = 302;
			res.setHeader("Location", url);
			res.end();
		} catch (err) {
			res.setHeader("Location", "https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploaded?returnMessage=Your Starter Could Not Be Uploaded! Please contact joseph the animator hashtag 2292 on discord to get this issue resolved.");
			res.statusCode = 500;
			res.end("00");
		}
	});
	return true;
}
