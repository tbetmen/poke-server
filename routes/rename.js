const JSONdb = require("simple-json-db")
const db = new JSONdb("./data/pokemon_fib1.json")

const express = require("express")
const router = express.Router()

const extractName = require("../helper/pokename.js")

const newFib = (name, latestFib) => {
    if (latestFib == 1) {
        if (db.has(name.toLowerCase())) {
            return latestFib + 1
        } else {
            db.set(name.toLowerCase(), true)
            return latestFib
        }
    } else if (latestFib < 3) {
        return latestFib + 1
    } else {
        const newFib = latestFib * (1 + Math.sqrt(5)) / 2.0
        return Math.round(newFib)
    }
}

const rename = oldName => {
    const fullnames = extractName(oldName)
    const latestFibNum = parseInt(fullnames[1])
    const newFibNum = newFib(fullnames[0], latestFibNum)
    
    return `${fullnames[0]}-${newFibNum}`
}

router.post("/", (req, res) => {
    const currentName = req.body.current_name
    const newName = rename(currentName)

    const resJSON = {
        "data": {
            "name": newName,
            "status": true
        }
    }

    res.json(resJSON)
})

module.exports = router
