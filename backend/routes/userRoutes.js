const { createUser } = require("../controller/userController");

const router = require("express").Router();


router.post("/", createUser)

module.exports = router;