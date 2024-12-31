import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 5050;

app.use(express.json());
app.use("/api", userRoute); //  /api/user

app.listen(port, () => {
  console.log(`Server is starting at ${port}`);
});
