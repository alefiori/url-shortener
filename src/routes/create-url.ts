import { Router } from "express";
import { model } from "../models";
import { nanoid } from "nanoid";
import { isURL } from "../utils";
import { defaultConfig } from "../config";

type CreateUrlRequestBody = {
  longUrl: string;
};

export const createUrlRoute = Router().post("/shorten", async (req, res) => {
  const { longUrl }: CreateUrlRequestBody = req.body;

  if (!isURL(defaultConfig.baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  const urlCode = nanoid();

  if (isURL(longUrl)) {
    try {
      const url = await model.findOne({ longUrl });

      if (!!url) {
        res.json(url.shortUrl);
      } else {
        const shortUrl = defaultConfig.baseUrl + "/" + urlCode;

        const responseUrl = new model({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await responseUrl.save();

        res.json(responseUrl.shortUrl);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});
