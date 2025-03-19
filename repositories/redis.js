import redis from "redis";
import dotenv from "dotenv";

dotenv.config();

// Initial Redis Server
export const createRedisClient = async () => {
    const redisClient = redis.createClient();
    redisClient.on("error", (err) => console.error("Redis Error:", err));
    await redisClient.connect();
    return redisClient;
}

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