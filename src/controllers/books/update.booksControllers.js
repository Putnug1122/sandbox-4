const { books } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const where = {
      id: req.body.id,
      name: req.body.name,
      type_books_id: req.body.type_books_id,
    };
    const requestDB = await books.update(payload, { where });
    return res.json({ msg: "Data buku berhasil diupdate", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
