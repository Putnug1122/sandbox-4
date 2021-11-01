const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const where = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      gender: req.body.gender,
      phone: req.body.phone,
    };
    const requestDB = await users.update(payload, { where });
    return res.json({ msg: "Data user berhasil diupdate", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
