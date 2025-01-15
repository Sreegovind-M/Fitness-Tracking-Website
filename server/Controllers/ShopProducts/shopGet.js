import {ShopProducts} from "../../model/ShopProducts.js";

export const getData = async (req, res) => {
  const data = await ShopProducts.find();
  res.status(200).json(data);
};
