import Router from 'express'
import { createTodov2, deleteTodov2, getTodov2, updateTodov2 } from '../controller/authv2.controller.js'
import verifyToken from '../middleware/verify.middleware.js'

export const todov2Router = Router()

todov2Router.get("/", verifyToken, getTodov2)
todov2Router.post("/", verifyToken, createTodov2)
todov2Router.patch("/update/:todoId", verifyToken, updateTodov2)
todov2Router.delete("/delete/:todoId", verifyToken, deleteTodov2)


//Get todos V2
/**
 * @swagger
 * /todosv2:
 *   get:
 *     summary: Get all todos for the authenticated user (V2)
 *     tags: [Todos V2 Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of todos belonging to the user from JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 106
 *                   content:
 *                     type: string
 *                     example: "Learn HTML"
 *                   isdone:
 *                     type: boolean
 *                     example: true
 *                   userId:
 *                     type: integer
 *                     example: 27
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



//Create todos V2
/**
 * @swagger
 * /todosv2:
 *   post:
 *     summary: Create a new todo (V2)
 *     tags: [Todos V2 Authentication]
 *     security:
 *       - bearerAuth: []
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
 *                 example: "play Dave the diving"
 *     responses:
 *       200:
 *         description: Todo created successfully via V2
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 153
 *                 content:
 *                   type: string
 *                   example: "play Dave the diving"
 *                 isdone:
 *                   type: boolean
 *                   example: false
 *                 userId:
 *                   type: integer
 *                   example: 27
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-29T04:41:50.707Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 */


//Update todos V2
/**
 * @swagger
 * /todosv2/update/{todoId}:
 *   patch:
 *     summary: Update a todo item
 *     tags: [Todos V2 Authentication]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID (e.g., 110)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Read cartoon book"
 *               isDone:
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
 *                 content:
 *                   type: string
 *                 isdone:
 *                   type: boolean
 *                 userId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *             example:
 *               id: 110
 *               content: "Read cartoon book"
 *               isdone: false
 *               userId: 27
 *               createdAt: "2026-01-29T10:47:38.784Z"
 *               updatedAt: "2026-01-29T06:43:03.133Z"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 */

//Delete todos V2
/**
 * @swagger
 * /todosv2/delete/{todoId}:
 *   delete:
 *     summary: Delete a todo item
 *     tags: [Todos V2 Authentication]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the todo to delete (e.g., 110)
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
 *             example:
 *               message: "todo ID110 is deleted"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Todo not found
 */
