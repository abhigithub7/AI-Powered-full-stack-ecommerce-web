import jwt from "jsonwebtoken";

export const genToken = async (userId) =>{
    try {
        let token = await jwt.sign({userId} ,process.env.JWT_SECRET_KEY, {expiresIn:"7d"})
        
        return token
    } catch (error) {
        console.log("Token error: "+error.message)

    }


}

export const genToken1 = async (email) =>{
    try {
        let token = await jwt.sign({email} ,process.env.JWT_SECRET_KEY, {expiresIn:"7d"})
        
        return token
    } catch (error) {
        console.log("Token error: "+error.message)

    }


}