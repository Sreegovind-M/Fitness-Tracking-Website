import e from "express";
import {feedbackGet} from "../Controllers/Feedback/feedbackGet.js"
import {feedbackPost} from "../Controllers/Feedback/feedbackPost.js"
import {feedbackDelete} from "../Controllers/Feedback/feedbackDelete.js"

const router = e.Router();

router.get("/", feedbackGet);
router.post("/", feedbackPost);
router.delete("/:id", feedbackDelete);