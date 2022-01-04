// https://binarysearch.com/problems/Rate-Limiter
class RateLimiter {
    expireTime = 0;
    requests = new Map();

    constructor(expire) {
        this.expireTime = expire;
    }

    limit(uid, timestamp) {
        if (this.requests.has(uid) && (timestamp - this.requests.get(uid)) >= this.expireTime ||
            !this.requests.has(uid)) {
            
            this.requests.set(uid, timestamp);
            return false;
        }

        return true;
    }
}
