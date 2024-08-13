import e from "express";
import { getData } from "../Controllers/Challenges/challengeGet.js";
import { postData } from "../Controllers/Challenges/challengePost.js";
import { deleteData } from "../Controllers/Challenges/challengeDelete.js";
import { updateData } from "../Controllers/Challenges/challengeUpdate.js";
import { putData } from "../Controllers/Challenges/challengePut.js";

const router = e.Router();

router.get("/", getData);
router.post("/", postData);
router.delete("/:id", deleteData);
router.post("/:id", updateData);
router.put("/:id", putData);

export default router;
