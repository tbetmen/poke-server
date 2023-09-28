const JSONdb = require("simple-json-db")
const db = new JSONdb("./data/pokemon_fib1.json")

const express = require("express")
const router = express.Router()

const extractName = require("../helper/pokename.js")

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

router.post("/", (req, res) => {
    const number = Math.floor((Math.random() * 100) + 1)
    const prime = isPrime(number)

    if (prime) {
        const currentName = req.body.current_name
        const firstname = extractName(currentName)[0].toLowerCase()

        if (db.has(firstname)) {
            db.delete(firstname)
        }
    }

    const resJSON = {
        "data": {
            "number": number,
            "status": isPrime(number)
        }
    }

    res.json(resJSON)
})

module.exports = router
