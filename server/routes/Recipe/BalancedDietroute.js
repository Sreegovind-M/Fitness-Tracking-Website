import express from "express";
import { BalancedDietget } from "../../Controllers/Recipe/BalancedDiet/BalancedDietget.js";
import { BalancedDietpost } from "../../Controllers/Recipe/BalancedDiet/BalancedDietpost.js";

const router = express.Router();

router.post("/", BalancedDietpost);
router.get("/", BalancedDietget);


export default router;
