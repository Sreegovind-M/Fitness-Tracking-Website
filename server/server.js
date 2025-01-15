import express from "express";
import mongoose from "mongoose";
import router from "./routes/challengeRoute.js";
import cors from "cors";
import GeneralRouter from "../server/routes/Recipe/Generalroute.js";
import BalancedDietRouter from "../server/routes/Recipe/BalancedDietroute.js";
import HighProteinRouter from "../server/routes/Recipe/HighProteinroute.js";
import LowCarbRouter from "../server/routes/Recipe/LowCarbroute.js";
import loginRoute from "../server/routes/loginRoute.js";
import shopRouter from "../server/routes/shopRoute.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", router);
app.use("/recipe", GeneralRouter);
app.use("/balanceddiet", BalancedDietRouter);
app.use("/highprotein", HighProteinRouter);
app.use("/lowcarb", LowCarbRouter);
app.use("/login", loginRoute);
app.use("/shop", shopRouter);

app.listen(3001);

mongoose
  .connect(
    "mongodb+srv://sreegovind1011:sreegovind123@cluster0.b0b2m.mongodb.net/FitnessTracking?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Db connnected"))
  .catch((err) => console.log(err));
