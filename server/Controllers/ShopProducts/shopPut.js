import { ShopProducts } from "../../model/ShopProducts.js";

export const putData = async (req, res) => {
  const data = await ShopProducts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(data);
};
