const express = require("express");
const router = express.Router();
const transactions = require("./create.transactionsControllers");
router.post("/", transactions.service);
module.exports = router;
