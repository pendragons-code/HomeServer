const { readdirSync } = require("fs")
module.exports = {
	name: "/",
	async execute(req, res) {
		let links = ""
		let videosDirs = readdirSync("./Src/frontEnd/public/Videos").filter(dirs => dirs)
		for(dirs of videosDirs) {
			let videoFile = readdirSync(`./Src/frontEnd/public/Videos/${dirs}`).filter(file => file)
			for(file of videoFile) {
				links += `<a href="/Videos/${dirs}/${videoFile}">${videoFile}</a>`
			}
		}
		return res.render("main.ejs", { links: links })
	}
}
