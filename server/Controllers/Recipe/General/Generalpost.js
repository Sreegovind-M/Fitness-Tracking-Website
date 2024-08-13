import General from "../../../model/Recipe/General.js";

export const Generalpost = async(req, res) =>{
    const data = await new General(req.body);
    data.save();
    res.status(201).json(data);
};

