import URL from "../models/URL.js";
import { nanoid } from "nanoid";

class ShortenService {
    static async shortenURL(originalUrl) {
        try {
            const shortId = nanoid(6); 
            const shortenUrl = `${process.env.BASE_URL}/${shortId}`;

            const data = await URL.setURL(originalUrl, shortenUrl);
            if (data === undefined){
                throw Error;
            } else {
                return shortenUrl;
            }

        } catch (error) {
            throw error
        }
    }
}

export default ShortenService;