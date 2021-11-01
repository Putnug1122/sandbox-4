const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const where = {
      id: req.body.id,
    };
    const requestDB = await users.destroy(payload, { where });
    return res.json({ msg: "Data user berhasil dihapus", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
