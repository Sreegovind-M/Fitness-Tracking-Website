import { Login } from "../../model/Login.js";

export const loginPost = async (req, res) => {
  const data = new Login(req.body);
  await data.save();
  res.status(201).json(data);
};
