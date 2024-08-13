import express from "express";
import { HighProteinget } from "../../controllers/Recipe/HighProtein/HighProteinget.js";
import { HighProteinpost } from "../../controllers/Recipe/HighProtein/HighProteinpost.js";
import { HighProteinDelete } from "../../Controllers/Recipe/HighProtein/HighProteindelete.js";

const router = express.Router();

router.post("/", HighProteinpost);
router.get("/", HighProteinget);
router.delete("/:id", HighProteinDelete);


export default router;
