import express from "express";
import { Generalget } from "../../controllers/Recipe/General/Generalget.js";
import { Generalpost } from "../../controllers/Recipe/General/Generalpost.js";

const router = express.Router();

router.post("/", Generalpost);
router.get("/", Generalget);


export default router;
