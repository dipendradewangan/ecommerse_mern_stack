const { registerUser, loginUser } = require("../controller/userController");

const router = require("express").Router();


router.post("/register", registerUser)

router.post("/login", loginUser)
module.exports = router;