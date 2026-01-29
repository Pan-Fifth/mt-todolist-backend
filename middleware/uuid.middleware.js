import { v4 as uuid } from "uuid";

export const addUuId = (req, res, next) => {
    if (!req.cookies.sessionId) {
        res.cookie("sessionId", uuid(), {
            httpOnly: true,
            sameSite: "lax",
        });
    }

    next();
}
