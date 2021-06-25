const express = require("express");
const router = express.Router();
const usercontroller = require("../controler/user");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, usercontroller.getUser);
router.get("/:d", usercontroller.getUserById);
router.post("/", usercontroller.addUser);
router.put("/:id", usercontroller.updateUser);
router.delete("/:id", usercontroller.deleteUser);

module.exports = router;
