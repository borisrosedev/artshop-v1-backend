import express from "express" // vendor
import dotenv from "dotenv" // vendor
import path from "node:path" // native library


dotenv.config({
  path: path.join(import.meta.dirname, ".env")
})

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb'}))

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// test route 1
app.get("/catalina", (req, res) => {
  return res.json({ message: "salut catalina" })
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/random.text', (req, res) => {
  res.send('random.text')
})




export default app;