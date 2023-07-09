const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

//API#01-----------------------------------------

router.post("/register", registerUser);

//API#02-----------------------------------------

router.post("/login", loginUser);

//API#03-----------------------------------------

router.get("/current", validateToken, currentUser);

module.exports = router;
