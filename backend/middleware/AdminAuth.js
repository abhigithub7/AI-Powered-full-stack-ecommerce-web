import jwt from 'jsonwebtoken';

const Adminauth = async (req, res, next) => {
  try {
    // Assuming your token is stored in a cookie named 'token'
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authorized. Please login again." });
    }

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!verifiedToken) {
      return res.status(401).json({ message: "Invalid token. Please login again." });
    }

    // You can attach the decoded token info to the request if needed
    req.adminData = verifiedToken; // assuming token has admin info like email, id, etc.

    next();
  } catch (error) {
    console.error("Admin auth error:", error.message);
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid or expired token. Please login again." });
    }
    return res.status(500).json({ message: "Error during admin authentication." });
  }
};

export default Adminauth;
