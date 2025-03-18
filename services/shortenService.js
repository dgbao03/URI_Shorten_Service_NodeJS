import URL from "../models/URL.js";
import { nanoid } from "nanoid";

class ShortenService {
    static async shortenURL(originalUrl) {
        try {
            // Get Shorten URL from existed Original URL
            let existedShortUrl = await URL.getExistedShortUrl(originalUrl);
            if (existedShortUrl != undefined) {
                return existedShortUrl.short_url;
            }

            // Generate Shorten URL
            const shortId = nanoid(8); 
            const shortenUrl = `${process.env.SHORTEN_BASE_URL}/${shortId}`;

            // Store the urls in database
            const data = await URL.setURL(originalUrl, shortenUrl);
            if (data === undefined) {
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