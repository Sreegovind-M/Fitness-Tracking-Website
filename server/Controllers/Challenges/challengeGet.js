import { Challenges } from "../../model/Challenges.js";

export const getData = async (req, res) => {
  const data = await Challenges.find();
  res.status(200).json(data);
};
