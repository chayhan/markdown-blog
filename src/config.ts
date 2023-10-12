import dotenv from "dotenv";

dotenv.config();

export const prefix = process.env.NODE_ENV === "production" ? `https://raw.githubusercontent.com/johannblue/markdown-blog/main/public` : "";