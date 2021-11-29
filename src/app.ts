import express from "express";
import { connectDB, defaultConfig } from "./config";
import { createUrlRoute, resolveUrlRoute } from "./routes";

const app = express();

connectDB();

app.use(express.json());

app.use("/", resolveUrlRoute);
app.use("/api/url", createUrlRoute);

app.listen(defaultConfig.port, () =>
  console.log(`Server running on port ${defaultConfig.port}`)
);
