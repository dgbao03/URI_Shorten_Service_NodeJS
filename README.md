# URI Shorten Service

## Project Description

**URI Shorten Service** is a simple URL shortening service that allows users to convert long URLs into shorter, more shareable links. When a user accesses a shortened URL, the system automatically redirects them to the original, full-length URL.

This service is ideal for improving readability and shareability of long URLs in emails, social media posts, or messaging platforms.

---

## Technical Stack

- **Node.js + Express**: Used to build the RESTful API for URL creation and redirection.
- **PostgreSQL**: Serves as the primary database, storing the mapping between original URLs and their corresponding shortened versions.
- **Redis**: Used as a caching layer to speed up URL lookups and reduce database load.

---

## Features

- Create short URLs for long input URLs.
- Redirect from a short URL to its original target.
- Cache frequently accessed URLs for performance optimization.

---

## API Endpoints (Coming Soon)

- `GET /shorten?url={originalUrl}` - Accepts a long URL as a query parameter and returns a shortened version.  

- `GET /:shortId` - Redirects the user to the original URL based on the provided `shortId`.  
