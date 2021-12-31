const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Get } = require("../../models/get");

router.post("/", async (req, res) => {
    let get = new Get();
    get.name = req.body.name;
    get.contact = req.body.contact;
    get.address = req.body.address;
    await get.save();
    return res.send(get);
  });
  module.exports = router;