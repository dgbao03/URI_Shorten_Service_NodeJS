import ShortenService from "../services/shortenService.js";

export const shortenURL = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortenUrl = await ShortenService.shortenURL(originalUrl);

        return res.status(200).json({ message: `Shorten URL: ${shortenUrl}` });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

