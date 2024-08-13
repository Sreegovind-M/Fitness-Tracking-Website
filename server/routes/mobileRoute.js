import express from "express";
import { Mobiles } from "../model/Mobiles.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     const data = Mobiles.find();
// });

router.get("/", async (req, res) => {
  const data = await Mobiles.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await Mobiles(req.body);
  data.save();
  res.json(data);
});

router.put("/", async (req, res) => {
  const data = await Mobiles.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(data);
});

export default router;
