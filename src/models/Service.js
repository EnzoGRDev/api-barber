const { Schema, model } = require("mongoose")

const serviceSchema = new Schema({
  name: String,
  price: Number,
  client_name: String,
  date: Date,
  time: Time,
  active: Number,
})

serviceSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Service = model("Service", serviceSchema)

module.exports = Service
