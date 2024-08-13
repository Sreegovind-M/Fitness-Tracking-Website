import LowCarb from "../../../model/Recipe/LowCarb.js";

export const LowCarbget = async (req, res) =>{
    const data = await LowCarb.find();
    res.status(200).json(data);
};

