import express from "express";
import { BalancedDietget } from "../../controllers/Recipe/BalancedDiet/BalancedDietget.js";
import { BalancedDietpost } from "../../controllers/Recipe/BalancedDiet/BalancedDietpost.js";

const router = express.Router();

router.post("/", BalancedDietpost);
router.get("/", BalancedDietget);


export default router;
