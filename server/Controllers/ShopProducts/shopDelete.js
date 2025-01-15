import {ShopProducts} from "../../model/ShopProducts.js";

export const deleteData = async (req, res) => {
    const data = await ShopProducts.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
}