import express from "express";
import { cuisinesRouter } from "@features/cuisines";
import { restaurantsRouter } from "@features/restaurants";
import { errorHandler } from "@middlewares";

// Init
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Routes
app.use("/cuisines", cuisinesRouter);
app.use("/restaurants", restaurantsRouter);

// Middlewares
app.use(errorHandler);

// Server
app
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
