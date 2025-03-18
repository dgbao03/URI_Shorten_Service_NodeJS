import express from "express";
import dotenv from "dotenv";
import { shortenURL } from "./controllers/shortenController.js";
import { redirectShortUrl } from "./controllers/redirectController.js";

const app = express();

dotenv.config();

app.use(express.json());

app.get("/shorten", shortenURL);

app.get("/:shortId", redirectShortUrl);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on Port ${process.env.SERVER_PORT}`);
})

