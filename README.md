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

## License
MIT License

Copyright (c) 2024 BaoDo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
