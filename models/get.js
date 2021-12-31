var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var getSchema = mongoose.Schema({
  name: String,
  contact: Number,
  address: String
});
var Get = mongoose.model("Get", getSchema);

function validateGet(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    contact: Joi.number().min(0).required(),
    address: Joi.string().min(3).max(100).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Get = Get;
module.exports.validate = validateGet;