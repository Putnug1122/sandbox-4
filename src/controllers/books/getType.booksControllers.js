const { books } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.name) {
      where.name = req.params.name;
    }
    const requestDB = await books.findAll({ where });
    return res.json(requestDB);
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
