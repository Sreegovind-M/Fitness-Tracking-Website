import { Feedback } from "../../model/Feedback.js";

export const feedbackDelete = async (req, res) => {
    const data = await Challenges.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
}