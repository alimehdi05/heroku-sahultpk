const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Contact } = require("../../models/get");

router.post("/", async (req, res) => {
    let contact = new Contact();
    contact.name = req.body.name;
    contact.contact = req.body.contact;
    contact.query = req.body.query;
    await contact.save();
    return res.send(contact);
  });
  module.exports = router;