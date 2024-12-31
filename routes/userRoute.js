import express from "express";
import { register } from "../controller/user.js";

const route = express.Router();

route.post("/register", register);

export default route;
