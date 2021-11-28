import express from "express";
import { connectDB } from "./config";

const app = express();

connectDB();

app.use(express.json());

const PORT = 6000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
