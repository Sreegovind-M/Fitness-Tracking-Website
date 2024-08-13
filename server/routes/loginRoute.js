import e from "express";
import { loginGet } from "../Controllers/Login/loginGet.js";
import { loginPost } from "../Controllers/Login/loginPost.js";
import { loginDelete } from "../Controllers/Login/loginDelete.js";

const router = e.Router();

router.get("/", loginGet);
router.post("/", loginPost);
router.delete("/:id", loginDelete);

export default router;