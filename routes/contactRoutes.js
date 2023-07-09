const express = require("express");

const router = express.Router();
const {
  getContact,
  createContact,
  getContactPara,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
// get api 1
router.route("/").get(getContact);

//post api
router.route("/").post(createContact);

//get api with parameter
router.route("/:id").get(getContactPara);

//put api
router.route("/:id").put(updateContact);

//delete api
router.route("/:id").delete(deleteContact);

module.exports = router;
