import express from "express";
import { Generalget } from "../../Controllers/Recipe/General/Generalget.js";
import { Generalpost } from "../../Controllers/Recipe/General/Generalpost.js";
const router = express.Router();

router.post("/", Generalpost);
router.get("/", Generalget);

export default router;
