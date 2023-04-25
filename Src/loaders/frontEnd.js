const { readdirSync } = require("fs")
const express = require("express")
const routerFrontEnd = express.Router()

const loadFrontEndFile = readdirSync(`./Src/frontEnd/PageLoader`).filter(files => files.endsWith(".js"))
// I will probably be throwing the other .html stuff in public.
for(const file of loadFrontEndFile) {
	const { execute, name } = require(`../frontEnd/PageLoader/${file}`)
	routerFrontEnd.get(`/${name}`, async (req, res) => {
		execute(req, res)
	})
}

module.exports = routerFrontEnd
