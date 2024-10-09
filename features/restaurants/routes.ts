import express from "express";
export const restaurantsRouter = express.Router();

restaurantsRouter.get("/", (req, res) => {
  res.send("Hello World!");
});
