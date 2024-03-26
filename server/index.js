import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors()
);
app.use(express.json());

import db from "./dbConnection.js";
import router from "./router.js";

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
