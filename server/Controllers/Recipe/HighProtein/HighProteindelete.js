import HighProtein from "../../../model/Recipe/HighProtein.js";

export const HighProteinDelete = async (req, res) => {
  const data = await HighProtein.findByIdAndDelete(req.params.id);
  res.status(200).json("deleted");
};
