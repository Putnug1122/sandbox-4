const express = require("express");
const router = express.Router();
const createUsers = require("./create.usersControllers");
const updateUsers = require("./update.usersControllers");
const deleteUsers = require("./delete.usersControllers");
const getUsers = require("./get.usersControllers");
router.post("/", createUsers.service);
router.put("/", updateUsers.service);
router.get("/", getUsers.service);
router.delete("/", deleteUsers.service);
module.exports = router;
