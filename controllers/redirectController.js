import RedirectService from "../services/redirectService.js";


export const redirectShortUrl = async (req, res) => {
    try {
        const shortenUrl = req.protocol + '://' + req.get('host') + req.originalUrl; 
        const originalUrl = await RedirectService.getOriginalUrl(shortenUrl);

        console.log("Controller Original URL: " + originalUrl);

        res.redirect(301, originalUrl);

    } catch (error) {
        if (error.message === "404-NOTFOUND"){
            return res.status(404).json({ message: "URL not exist! Please try again!"});
        } else {
            return res.status(500).json({ message: error.message });
        }
    }
}