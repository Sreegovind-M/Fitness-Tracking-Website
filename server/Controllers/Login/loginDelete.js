import { Login } from "../../model/Login.js";

export const loginDelete = async (req, res) => {
    const data = await Login.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
}