import express from "express";
import { cuisinesRouter } from "@cuisines";
import { restaurantsRouter } from "@restaurants";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/cuisines", cuisinesRouter);
app.use("/restaurants", restaurantsRouter);

app
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
