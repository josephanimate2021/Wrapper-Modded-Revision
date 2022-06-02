/***
 * starter save route
 */
const starter = require("./main");
const loadPost = require("../request/post_body");

module.exports = function (req, res, url) {
	if (req.method != "POST" || url.path != "/goapi/saveTemplate/") return;
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
		starter
			.save(body, thumb, meta, id)
			.then(nId => res.end("0" + nId))
			.catch(err => {
				if (process.env.NODE_ENV == "dev") throw err;
				console.error("Error saving starter: " + err)
				res.end("1")
			});
	});
	return true;
}
