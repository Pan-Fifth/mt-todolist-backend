import { prisma } from "../config/prismaClient.js"
import { createError } from "./error.handler.service.js"

export const getTodoService = async (userId) => {
    if (!userId) throw createError(400, "no userId provided")
    const todos = await prisma.todo.findMany({
        where: {
            userId: +userId
        }
    })
    return todos
}

export const createTodoService = async (userId, detail) => {
    if (!userId || !detail) throw createError(401, "no userId or Todo Deatail provided")
    const createTodo = await prisma.todo.create({
        data: {
            content: detail,
            userId: +userId,
            updatedAt: null
        }
    })
    return createTodo
}

export const updateTodoService = async (userId, todoId, content, isdone) => {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    const todo = await prisma.todo.findUnique({ where: { id: todoId } })

    if (!user || !todo) throw createError(400, "user or todo not found")
    if (todo.userId != user.id) throw createError(401, "userId not match")
    if (isdone && typeof isdone == "string") {
        if (isdone.toLocaleLowerCase() == "false") {
            isdone = Boolean(false)
        } else if (isdone.toLocaleLowerCase() == "true") {
            isdone = Boolean(true)
        } else {
            isdone = undefined
        }
    }

    const result = await prisma.todo.update({
        where: {
            id: todoId
        },
        data: {
            content,
            isdone: Boolean(isdone)
        }
    })
    return result
}

export const deleteTodoService = async (userId, todoId) => {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    const todo = await prisma.todo.findUnique({ where: { id: todoId } })
    if (!user || !todo) throw createError(400, "user or todo not found")
    if (todo.userId != user.id) throw createError(401, "userId not match")
    const result = await prisma.todo.delete({ where: { id: todoId } })
    return result
}