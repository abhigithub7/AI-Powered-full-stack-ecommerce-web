import { User } from "../Models/User.Model.js"


const getCurrentUser = async (req,res) =>{
    try {
        let user = await User.findById(req.userId).select("-password")

        if(!user)
        {
            return res.status(404).json({
                message:"user not found"
            })
        }
        
           let token = await  genToken(user._id);
           res.cookie("token", token, {
             httpOnly: true,
             secure: false,
             sameSite: "None",
             maxAge: 7 * 24 * 60 * 60 * 1000,
           });
        return res.status(200).json(user,token

        )
        
    } catch (error) {
        console.log("error: "+ error.message);
     return   res.status(500).json({message:"getcurrentuser error"+error.message});

    }
}


export const getAdmin = async (req, res) => {
  try {
    // Assuming you set req.adminData in Adminauth middleware (decoded token)
    const adminData = req.adminData;

    if (!adminData || !adminData.email) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    return res.status(200).json({
      email: adminData.email,
      role: adminData.role || "admin" // If role is in token, else fallback
    });
  } catch (error) {
    console.error("getAdmin error:", error.message);
    return res.status(500).json({ message: "getAdmin error: " + error.message });
  }
};

export default getCurrentUser