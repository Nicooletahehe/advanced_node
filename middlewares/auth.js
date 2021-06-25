const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send({ message: "you are not a valid user" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    // req.user = decoded;
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = auth;
