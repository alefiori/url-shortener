import { Router } from "express";
import { model } from "../models";

export const resolveUrlRoute = Router().get("/:code", async (req, res) => {
  try {
    const url = await model.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});
