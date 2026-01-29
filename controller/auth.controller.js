import { loginService, registerService } from "../service/auth.service.js"
import { createError } from "../service/error.handler.service.js"

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) throw createError(400, "username and password key are required")
        const user = await loginService(username, password)
        res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
}

export const register = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) throw createError(400, `username and password key are required`)
        const registerUser = await registerService(username, password)
        res.status(201).json({ registerUser })
    } catch (error) {
        next(error)
    }
}