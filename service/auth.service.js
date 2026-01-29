import { prisma } from "../config/prismaClient.js"
import { createError } from "./error.handler.service.js";
import jwt from "jsonwebtoken";


export const loginService = async (username, password) => {
    if (!username || !password) throw createError(400, "no username and password input")
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) throw createError(401, "username or password invalid")
    if (user.password !== password) throw createError(401, "username or password invalid")

    const privateKey = process.env.PRIVATE_KEY
    const token = await jwt.sign(
        {
            userId: user.id,
            username: user.username,
        }
        , privateKey, { algorithm: 'HS256' });

    return {
        userId: user.id,
        username: user.username,
        token: token
    }
}

export const registerService = async (username, password) => {
    const isExist = await prisma.user.findUnique({ where: { username } })
    if (isExist) {
        throw createError(409, "username already exist")
    }
    if (!username || !password) {
        throw createError(400, "no username or password provided");
    }
    const user = await prisma.user.create({
        data: {
            username,
            password
        },
        omit: {
            password: true
        }
    })

    return user
}