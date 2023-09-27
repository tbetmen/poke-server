const express = require("express")
const bodyParser = require("body-parser")

// routers
const catchRoutes = require("./routes/catch")
const releaseRoutes = require("./routes/release")
const renameRoutes = require("./routes/rename")

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use("/catch", catchRoutes)
app.use("/release", releaseRoutes)
app.use("/rename", renameRoutes)

app.listen(port, () => {
    console.log(`Server started!!!`)
})
