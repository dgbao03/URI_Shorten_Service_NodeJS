import pool from "../config/pg.js";

class URL {
    static async setURL(originalUrl, shortenUrl) {
        try {
            const { rows } = await pool.query('INSERT INTO urls (short_url, original_url) VALUES ($1, $2) RETURNING *', [shortenUrl, originalUrl]);
            return rows[0];
        } catch (error) {
            console.log("Lỗi khi xử lý setURL (Model)");
            throw error;
        }
    }

    static async getExistedShortUrl(originalUrl) {
        try {
            const { rows } = await pool.query('SELECT short_url FROM urls WHERE original_url = $1', [originalUrl]);
            return rows[0];
        } catch (error) {
            console.log("Lỗi khi xử lý getExistedShortUrl (Model)");
            throw error;
        }
    }

    static async getOriginalUrl(shortenUrl) {
        try {
            const { rows } = await pool.query('SELECT original_url FROM urls WHERE short_url = $1', [shortenUrl]);

            console.log(rows[0]);
            console.log(rows[0].original_url);

            if (rows.length === 0) {
                return null; 
            }

            return rows[0].original_url;
        } catch (error) {
            console.log("Lỗi khi xử lý getOriginalUrl (Model)");
            throw error;
        }
    }
}

export default URL;