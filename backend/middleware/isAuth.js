import jwt from 'jsonwebtoken'

const isAuth = (req,res,next)=>{
    try {
        const {token} = req.cookies

        if(!token)
        {
            return res.status(400).json({
                message:" token missing"
            })
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET_KEY)

        if(!verifyToken)
        {
            return res.status(400).json({
                message:"user does not have a valid token"
            })

        }
        req.userId = verifyToken.userId
        next();
    } catch (error) {
        console.error("isAuth error:", error.message);
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
    return res.status(500).json({ message: "Server error during authentication" });
        
    }

}

export default isAuth