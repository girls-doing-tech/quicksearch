/*const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// Set up a proxy for the remote server
const proxyOptions = {
  target: 'https://secure.disoft-tech.com',
  changeOrigin: true, // Changes the host header to match the target
}

const proxy = createProxyMiddleware(
  '/Disoft_RestFul_Api/resources/tayba_test',
  proxyOptions
)

// Use the proxy middleware
app.use(proxy)

// Start the server
const port = 3000 // You can use any available port
app.listen(port, () => {
  console.log(`Proxy server is listening on port ${port}`)
})*/
const express = require('express')
const fetch = require('node-fetch')

const app = express()
const PORT = 3000

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // Replace * with your allowed domains
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.get('/proxy', async (req, res) => {
  const externalUrl = req.query.url
  try {
    const response = await fetch(externalUrl)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Proxy request failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`)
})
