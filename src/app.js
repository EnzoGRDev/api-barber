require("dotenv").config()
require("./database")
const express = require("express")
const cors = require("cors")
const app = express()
const mercadopago = require("mercadopago")
const mp_router = require("./routes/mp_router")
const URLS = require("./configs/urls")

app.use(
  cors({
    origin: [URLS.LOCALHOST, URLS.VERCEL],
  })
)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

mercadopago.configure({
  access_token: process.env.PROD_ACESS_TOKEN,
})

app.use("/", mp_router)

module.exports = app
