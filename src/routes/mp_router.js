const mp_router = require("express").Router()
const URLS = require("../configs/urls")
const mercadopago = require("mercadopago")

mp_router.post("/item", (req, res) => {
  // const {title, unit_price, quantity} = req.body
  // Crea un objeto de preferencia
  let preference = {
    auto_return: "approved",
    back_urls: {
      success: URLS.VERCEL,
      failure: URLS.VERCEL,
      pending: URLS.VERCEL,
    },
    items: [
      {
        title: "Corte",
        unit_price: 100,
        quantity: 1,
      },
    ],
  }

  let url

  mercadopago.preferences
    .create(preference)
    .then((resMP) => {
      url = resMP.body.init_point
      res.status(200).json({ url })
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = mp_router
