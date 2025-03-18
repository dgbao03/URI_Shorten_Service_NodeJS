import pool from "../config/pg.js";

class URL {
    static async setURL(originalUrl, shortenUrl) {
        try {
            const { rows } = await pool.query('INSERT INTO urls (short_url, original_url) VALUES ($1, $2) RETURNING *', [originalUrl, shortenUrl]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

export default URL;