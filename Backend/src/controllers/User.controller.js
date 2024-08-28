import User from '../schema/User.schema'
export const getUser = async(req,res)=>{
try {
    const user =await User.find()
    console.log("res",user);
    res.status(200).json(user)
} catch (error) {
    console.log("err",error);
    res.status(500).json(error)
    throw error
}
}