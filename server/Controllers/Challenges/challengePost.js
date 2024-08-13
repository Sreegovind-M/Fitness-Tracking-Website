import { Challenges } from "../../model/Challenges.js";

export const postData = async (req, res) => {
  const data = new Challenges(req.body);
  await data.save();
  res.status(201).json(data);
};
