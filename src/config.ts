import dotenv from "dotenv";

dotenv.config();

export const prefix = process.env.NODE_ENV === "production" ? `https://raw.githubusercontent.com/chayhan/markdown-blog/main/public` : "";

export const isDebug = !(process.env.NODE_ENV === "production");

export const SITE_TITLE_SUFFIX = " :: chayhan's Blog --";