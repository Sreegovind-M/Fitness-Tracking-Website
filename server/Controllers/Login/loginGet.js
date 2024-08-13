import { Login } from "../../model/Login.js";

export const loginGet = async (req, res) =>{
    const data = await Login.find();
    res.status(200).json(data);
}