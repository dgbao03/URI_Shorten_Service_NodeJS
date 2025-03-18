import URL from "../models/URL.js";

class RedirectService {
    static async getOriginalUrl(shortenUrl) {
        try {
            const originalUrl = await URL.getOriginalUrl(shortenUrl);

            console.log("Service Original URL: " + originalUrl)

            if (!originalUrl){
                throw new Error("404-NOTFOUND");
            } else {
                return originalUrl;
            }
        } catch (error) {
            throw error;
        }
    }
}

export default RedirectService;