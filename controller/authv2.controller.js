import { createError } from "../service/error.handler.service.js"
import { createTodoService, deleteTodoService, getTodoService, updateTodoService } from "../service/todo.service.js"


export const getTodov2 = async (req, res, next) => {
    try {

        const userId = req.user.userId
        const todos = await getTodoService(userId)
        res.status(200).json(todos)
    } catch (error) {
        next(error)
    }
}

export const createTodov2 = async (req, res, next) => {
    try {
        const userId = req.user.userId
        const { content } = req.body;
        if (!content) throw createError(400, "key content is required")
        const todo = await createTodoService(userId, content)
        res.status(201).json(todo)
    } catch (error) {
        next(error)
    }
}
export const updateTodov2 = async (req, res, next) => {
    try {

        const userId = req.user.userId
        const todoId = +req.params.todoId
        if (!todoId) throw createError(400, "todoId param is required")
        const { content, isdone } = req.body
        if (!content) throw createError(400, "key content or isDone  required")
        const todo = await updateTodoService(userId, todoId, content, isdone)
        res.status(200).json(todo)

    } catch (error) {
        next(error)
    }
}
export const deleteTodov2 = async (req, res, next) => {
    try {
        const userId = req.user.userId
        const todoId = +req.params.todoId
        if (!todoId) throw createError(400, "todoId param is required")
        await deleteTodoService(userId, todoId)
        res.status(200).json({ message: `todo ID${todoId} is deleted` })
    } catch (error) {
        next(error)
    }
}