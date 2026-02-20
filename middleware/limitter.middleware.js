import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 นาที
    max: 20, // ขอได้สูงสุด 100 ครั้ง / IP / window
    keyGenerator: (req) => {
        return req.cookies.sessionId;
    },
    message: {
        message: "Too many requests, please try again later"
    },
    standardHeaders: true, // ส่ง rate limit info ใน header
    legacyHeaders: false,
});