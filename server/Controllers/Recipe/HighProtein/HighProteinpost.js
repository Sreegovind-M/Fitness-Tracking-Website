import HighProtein from "../../../model/Recipe/HighProtein.js";

export const HighProteinpost = async (req, res) =>{
    const data = await new HighProtein(req.body);
    data.save();
    res.status(201).json(data);
};

