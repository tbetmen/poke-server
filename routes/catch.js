const express = require("express")
const router = express.Router()

router.get("/", (_, res) => {
    const catchStatus = Math.random() < 0.5
    const resJSON = {
        "data": {
            "status": catchStatus
        }
    }

    res.json(resJSON)
})

module.exports = router
