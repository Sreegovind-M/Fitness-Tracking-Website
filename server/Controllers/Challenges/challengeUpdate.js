import { Challenges } from "../../model/Challenges.js";

export const updateData = async (req, res) => {
    const data = await Challenges.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(data);
}