var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var getSchema = mongoose.Schema({
  name: String,
  contact: Number,
  query: String
});
var Contact = mongoose.model("Contact", contactSchema);

function validateContact(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    contact: Joi.number().min(0).required(),
    query: Joi.string().min(3).max(100).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Contact = Contact;
module.exports.validate = validateContact;