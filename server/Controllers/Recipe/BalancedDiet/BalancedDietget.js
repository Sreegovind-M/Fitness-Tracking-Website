import BalancedDiet from "../../../model/Recipe/BalancedDiet.js";

export const BalancedDietget = async (req, res) =>{
    const data = await BalancedDiet.find();
    res.status(200).json(data);
};

