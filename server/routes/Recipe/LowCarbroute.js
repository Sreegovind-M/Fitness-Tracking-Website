import express from "express";
import { LowCarbget } from "../../controllers/Recipe/LowCarb/LowCarbget.js";
import { LowCarbpost } from "../../controllers/Recipe/LowCarb/LowCarbpost.js";

const router = express.Router();

router.post("/", LowCarbpost);
router.get("/", LowCarbget);


export default router;
