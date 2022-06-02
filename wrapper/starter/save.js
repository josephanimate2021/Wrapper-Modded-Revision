/***
 * starter save route
 */
const starter = require("./main");
const loadPost = require("../request/post_body");

function createId() {
	return Math.random().toString(16).substring(2, 9);
}

module.exports = function (req, res, url) {
	if (req.method != "POST") {
		switch (url.path) {
			case "/goapi/saveTemplate/": {
				loadPost(req, res).then(data => {
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
				});
			}
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
