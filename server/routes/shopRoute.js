import e from "express";
import { getData } from "../Controllers/ShopProducts/shopGet.js";
import { putData } from "../Controllers/ShopProducts/shopPut.js";
import { deleteData } from "../Controllers/ShopProducts/shopDelete.js";
import { postData } from "../Controllers/ShopProducts/shopPost.js";

const router = e.Router();

router.get("/", getData);
router.post("/", postData);
router.delete("/:id", deleteData);
router.put("/:id", putData);

export default router;
