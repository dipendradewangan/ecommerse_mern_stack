const { registerUser, loginUser, logoutUser, updatePassword, forgotPassword, resetPassword } = require("../controller/userController");
const { isAuthenticateUser } = require("../middleware/auth");



const router = require("express").Router();



router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.post("/password/update", isAuthenticateUser, updatePassword);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

module.exports = router;