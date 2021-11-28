import { Router } from "express";
import { model } from "../models";
import { nanoid } from "nanoid";
import { isURL } from "../utils";
import { defaultConfig } from "../config";

export const createUrlRoute = Router().post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!isURL(defaultConfig.baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  const urlCode = nanoid();

  if (isURL(longUrl)) {
    try {
      let url = await model.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = defaultConfig.baseUrl + "/" + urlCode;

        url = new model({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});
