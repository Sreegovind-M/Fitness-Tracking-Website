import {Feedback }from "../../model/Feedback.js";

export default feedbackPost = async(req, res) =>{
    const data = new Feedback(req.body);
    await data.save();
    res.status(201).json(data);
}