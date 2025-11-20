import express from "express" // vendor
import dotenv from "dotenv" // vendor
import path from "node:path" // native library
import fetch from "node-fetch"


dotenv.config({
  path: path.join(import.meta.dirname, ".env")
})

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb'}))
// all the static assets of the app are in the public folder
app.use(express.static(path.join(import.meta.dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname, 'public/views'))

// GET test
app.get("/test", (req, res) => {
  return res.json({ message: "test" })
})

// GET root
// beautify the UI 
app.get('/', (req, res) => {
  res.render('landing', {
    message: 'Welcome to the ArtShop API'
  })
})

app.get('/artworks', async(req, res) => {
    try {
      const serializedArtworks = await fetch('https://691f19f6bb52a1db22c076fb.mockapi.io/api/v1/artworks')
      const deserializedArtworks = await serializedArtworks.json()
      return res.json({deserializedArtworks});
    } catch(err){
      return res.json({ err })
    }
})

// POST root
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})





export default app;