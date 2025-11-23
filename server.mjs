// server.mjs
import app from "./app.mjs"

app.listen(process.env.PORT || 3000, process.env.HOST || "0.0.0.0", () => {
  console.log(`🚀 Server listening at http://${process.env.HOST || "0.0.0.0"}:${process.env.PORT || 3000}`)
})
