const express = require("express");
const router = express.Router();
const createBooks = require("./create.booksControllers");
const getBooks = require("./get.booksControllers");
const updateBooks = require("./update.booksControllers");
const deleteBooks = require("./delete.booksControllers");
const getType = require("./getType.booksControllers");
router.post("/", createBooks.service);
router.get("/", getBooks.service);
router.get("/type", getType.service);
router.put("/", updateBooks.service);
router.delete("/", deleteBooks.service);
module.exports = router;
