export const errMiddleware = (error, req, res, next) => {
    console.log(error)
    const statusCode = error.status || 500
    error.status == 404
        ? res.json({
            status: "error",
            message: "path not found"
        })
        : res.status(statusCode).json({
            status: "error",
            message: error.message
        })
}