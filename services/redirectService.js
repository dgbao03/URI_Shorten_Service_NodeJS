import URL from "../models/URL.js";
import { getRedis, setRedis } from "../repositories/redis.js";
class RedirectService {
    static async getOriginalUrl(shortenUrl) {
        try {
            const redisOriginalUrl = await getRedis(shortenUrl);

            if (!redisOriginalUrl) {
                return redisOriginalUrl;
            }

            const originalUrl = await URL.getOriginalUrl(shortenUrl);

            if (!originalUrl){
                throw new Error("404-NOTFOUND");
            } 

            return originalUrl;
        } catch (error) {
            throw error;
        }
    }
}

export default RedirectService;