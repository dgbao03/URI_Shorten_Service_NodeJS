import URL from "../models/URL.js";
import { nanoid } from "nanoid";
import { setRedis } from "../repositories/redis.js";

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

            // Store Shorten/Original Url in PG Database 
            const data = await URL.setURL(originalUrl, shortenUrl);
            if (!data) {
                throw Error;
            } 

            // Store Shorten/Original Url in Redis
            try {
                await setRedis(shortenUrl, originalUrl);
            } catch (error) {
                throw Error;
            }

            return shortenUrl;
        } catch (error) {
            console.error("Lỗi khi xử lý Service:", error);
            throw error
        }
    }
}

export default ShortenService;