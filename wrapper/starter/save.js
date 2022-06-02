/***
 * starter save route
 */
const starter = require("./main");
const loadPost = require("../request/post_body");

module.exports = function (req, res, url) {
	if (req.method != "POST") {
		loadPost(req, res).then(data => {
			switch (url.path) {
				case "/goapi/saveTemplate/": {
					var body = Buffer.from(data.body_zip, "base64");
					var thumb = Buffer.from(data.thumbnail_large, "base64");
					var id = data.movieId || null;
					var meta = {
						id: id,
						enc_asset_id: id,
						type: "movie",
						title: "Untitled",
						published: "",
						share: {
							type: "none"
						},
						tags: "",
						file: `${id}.xml`
					};
					starter.save(body, thumb, meta, id).then(nId => res.end("0" + nId)).catch(err => {
						if (process.env.NODE_ENV == "dev") throw err;
						console.error("Error saving starter: " + err)
						res.end("1")
					});
				}
				case "/upload_starter": {
					const body = Buffer.from(data.body_zip, "base64");
					const thumb = Buffer.from(data.thumbnail_large, "base64");
					const id = data.movieId || null;
					const path = req.files.import.filepath, buffer = fs.readFileSync(path);
					const meta = {
						id: id,
						enc_asset_id: id,
						type: "movie",
						title: `Uploaded Starter #${id}`,
						published: "",
						share: {
							type: "none"
						},
						tags: "",
						file: `${id}.xml`
					};
					starter.save(body, thumb, meta, id, buffer).then(nId => res.end("0" + nId)).catch(err => {
						if (process.env.NODE_ENV == "dev") throw err;
						console.error("Error uploading starter: " + err)
						res.end("1")
					});
					const url = `https://josephanimate2021.github.io/Vyond-Legacy-Offline/utilities/offline-redirect-helper/starterUploaded?returnMessage=Your Starter Has Been Uploaded! Id: ${id}`;
					fs.unlinkSync(path);
					res.statusCode = 302;
					res.setHeader("Location", url);
					res.end();
				}
			}
		});
	}
	return true;
}
