const { Schema, model } = require("mongoose")

const adminSchema = new Schema({
  email: String,
  password: String,
  secretAnswer: String,
})

adminSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
    delete returnedObject.secretAnswer
  },
})

const Admin = model("Admin", adminSchema)

module.exports = Admin
