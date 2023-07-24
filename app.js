const express = require("express")
const cors = require("cors")
const studentRoutes = require("./routes/students")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
	response.json({
		message: "Hello, world!"
	})
})

app.use("/students", studentRoutes)

module.exports = app
