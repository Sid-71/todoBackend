const express = require("express");
const router = express.Router();


const userController = require("../controllers/user");
const auth = require("../middlewares/auth")

router.post("/signup",userController.signup);
router.post('/signin',userController.signin);



module.exports = router;