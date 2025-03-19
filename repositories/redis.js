import redis from "redis";
import dotenv from "dotenv";

dotenv.config();

// Initial Redis Server
const createRedisClient = async () => {
    const redisClient = redis.createClient();
    redisClient.on("error", (err) => console.error("Redis Error:", err));
    await redisClient.connect();
    return redisClient;
}

// Get the Original Url in Redis
export const getRedis = async (shortenUrl) => {
    try {
        const redisClient = await createRedisClient();
        let originalUrl = await redisClient.get(shortenUrl);
        await redisClient.quit(); 

        return originalUrl;
    } catch (error) {
        console.log("Lỗi khi truy vấn Redis: ", error);
        throw error;
    }

    
}

// Store Shorten and Original Url in DB
export const setRedis = async (shortenUrl, originalUrl) => {
    try {
        const redisClient = await createRedisClient();

        await redisClient.setEx(shortenUrl, Number(process.env.EXPIRATION_TIME), originalUrl);
        await redisClient.quit();

        return true;
    } catch (error) {
        console.error("Lỗi khi lưu vào Redis:", error);
        throw error;
    }
}