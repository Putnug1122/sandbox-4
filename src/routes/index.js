var express = require("express");
var router = express.Router();
const booksRouter = require("../controllers/books/routes");
const usersRouter = require("../controllers/users/routes");
const transRouter = require("../controllers/transactions/routes");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.use("/books", booksRouter);
router.use("/users", usersRouter);
router.use("/transactions", transRouter);
module.exports = router;
