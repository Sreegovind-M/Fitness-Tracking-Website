import LowCarb from "../../../model/Recipe/LowCarb.js";

export const LowCarbpost = async (req, res) =>{
    const data = await new LowCarb(req.body);
    data.save();
    res.status(201).json(data);
};

