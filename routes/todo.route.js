import Router from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controller/todo.controller.js'

export const todoRouter = Router()

todoRouter.get("/:userId", getTodo)
todoRouter.post("/:userId", createTodo)
todoRouter.patch("/:userId/:todoId", updateTodo)
todoRouter.delete("/:userId/:todoId", deleteTodo)


//Get todo//
/**
 * @swagger
 * /todos/{userId}:
 *   get:
 *     summary: Get all todos for a specific user
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user
 *         example: 1
 *     responses:
 *       200:
 *         description: A list of todos including timestamps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 46
 *                   content:
 *                     type: string
 *                     example: "Learn HTML"
 *                   isdone:
 *                     type: boolean
 *                     example: false
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2026-01-29T10:47:38.784Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 */

//Create Todo//
/**
 * @swagger
 * /todos/{userId}:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "todo4"
 *     responses:
 *       200:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 148
 *                 content:
 *                   type: string
 *                   example: "todo4"
 *                 isdone:
 *                   type: boolean
 *                   example: false
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-29T04:30:12.838Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */

//Update Todo//
/**
 * @swagger
 * /todos/{userId}/{todoId}:
 *   patch:
 *     summary: Update todo content and/or status
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 26
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       description: Pass content, isdone, or both to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "new content"
 *               isdone:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 content:
 *                   type: string
 *                   example: "new content"
 *                 isdone:
 *                   type: boolean
 *                   example: false
 *                 userId:
 *                   type: integer
 *                   example: 26
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-29T10:47:38.784Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-29T04:15:30.579Z"
 */

//Delete Todo
/**
 * @swagger
 * /todos/{userId}/{todoId}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user who owns the todo
 *         example: 26
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the todo to delete
 *         example: 1
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "todo ID1 is deleted"
 */


