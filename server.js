import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { errMiddleware } from './middleware/error.middleware.js'
import { authRouter } from './routes/auth.routes.js'
// import { todoRouter } from './routes/todo.route.js'
import { notFound } from './middleware/path.notfound.middleware.js'
// import { todov2Router } from './routes/todov2.routes.js'
import { swagger } from './config/swagger.js'
// import cookieParser from 'cookie-parser'
// import { addUuId } from './middleware/uuid.middleware.js'
// import { limiter } from './middleware/limitter.middleware.js'

const app = express()
app.use(cors({
    origin: "http://localhost:5173" || process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "bypass-tunnel-reminder"]

}))
// app.use(cookieParser());
// app.use(addUuId)
// app.use(limiter);
app.use(express.json())
app.use(morgan('dev'))
swagger(app)


//usernamr = todo_user{userId}
//password = password{userId}

app.use("/auth", authRouter)
// app.use('/todos', todoRouter)
// app.use('/todosv2', todov2Router)


app.use(notFound);
app.use(errMiddleware)

const PORT = 3000 || 4000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})