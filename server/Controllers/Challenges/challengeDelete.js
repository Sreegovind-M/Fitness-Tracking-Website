import { Challenges } from "../../model/Challenges.js";

export const deleteData = async (req, res) => {
    const data = await Challenges.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
}