import BalancedDiet from "../../../model/Recipe/BalancedDiet.js";

export const BalancedDietpost = async (req, res) =>{
    const data = await new BalancedDiet(req.body);
    data.save();
    res.status(201).json(data);
};

