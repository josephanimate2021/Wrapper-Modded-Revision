/***
 * starter upload route
 */
const formidable = require("formidable");
const fs = require("fs");
const starter = require("./main");

module.exports = function (req, res, url) {
	if (req.method != "POST" || url.path != "/upload_starter") return;
	new formidable.IncomingForm().parse(req, (e, f, files) => {
		const path = files.import.path, buffer = fs.readFileSync(path);
		var id = req.body.movieId || null;
		var body = Buffer.from(req.body.body_zip, "base64");
		var thumb = Buffer.from(req.body.thumbnail_large, "base64");
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
			const id = char.save(buffer, body, thumb, meta, id);
			const url = `https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploaded?returnMessage=Your Starter Has Been Uploaded! Id: ${id}`;
			fs.unlinkSync(path);
			// redirect the user
			res.statusCode = 302;
			res.setHeader("Location", url);
			res.end();
		} catch (err) {
			console.error("Error uploading starter: " + err);
			res.statusCode = 500;
			res.end("00");
		}
	});
	return true;
}
