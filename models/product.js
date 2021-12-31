var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  name: String,
  charges: Number,
  description: String
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    charges: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
