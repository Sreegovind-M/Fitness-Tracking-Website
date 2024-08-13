import General from "../../../model/Recipe/General.js";

export const Generalget = async (req, res) =>{
    const data = await General.find();
    res.status(200).json(data);
};

