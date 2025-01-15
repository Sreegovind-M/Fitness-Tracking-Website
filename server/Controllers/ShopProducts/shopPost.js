import {ShopProducts} from "../../model/ShopProducts.js";

export const postData = async (req, res) => {
  const data = new ShopProducts(req.body);
  await data.save();
  res.status(201).json(data);
};
