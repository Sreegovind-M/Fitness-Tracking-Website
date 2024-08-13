import { Feedback } from "../../model/Feedback.js";

export const feedbackGet = async (req, res) => {
  const data = await Feedback.find();
  res.status(200).json(data);
};
