import express from "express" // vendor
import dotenv from "dotenv" // vendor
import path from "node:path" // native library


dotenv.config({
  path: path.join(import.meta.dirname, ".env")
})

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb'}))


// test route 1
app.get("/test", (req, res) => {
  return res.json({ message: "test" })
})




export default app;