
const jwt = require("jsonwebtoken");
const User = require("../models/user")


const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);

  const token = authHeader?.split(" ")[1];
  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      console.log("❌ Invalid token user");
      return res.status(401).json({ message: "Invalid token user" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("❌ Token verification error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};


module.exports = authMiddleware;
