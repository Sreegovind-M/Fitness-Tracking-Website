import express from "express";
import { LowCarbget } from "../../Controllers/Recipe/LowCarb/LowCarbget.js";
import { LowCarbpost } from "../../Controllers/Recipe/LowCarb/LowCarbpost.js";

const router = express.Router();

router.post("/", LowCarbpost);
router.get("/", LowCarbget);


export default router;
