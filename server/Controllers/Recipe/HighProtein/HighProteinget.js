import HighProtein from "../../../model/Recipe/HighProtein.js";

export const HighProteinget = async (req, res) =>{
    const data = await HighProtein.find();
    res.status(200).json(data);
};

