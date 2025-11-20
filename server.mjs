import app from "./app.mjs"


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("🚀 Server listening at " + process.env.HOST + ":" + process.env.PORT)
})