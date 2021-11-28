import mongoose from "mongoose";

type UrlSchema = {
  urlCode: string;
  longUrl: string;
  shortUrl: string;
  date?: string;
};

const urlSchema = new mongoose.Schema<UrlSchema>({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

export const model = mongoose.model<UrlSchema>("Url", urlSchema);
