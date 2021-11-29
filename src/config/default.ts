type Config = {
  mongoURI: string;
  baseUrl: string;
  port: number;
};

export const defaultConfig: Config = {
  mongoURI: "mongodb://127.0.0.1:27017",
  baseUrl: "http://localhost:2020",
  port: 2020,
};
