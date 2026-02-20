import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       
 */


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CC22 Midterm Practical Examination APIs Doc',
            // version: '1.0.0',
            description: `BASE URL : https://mt-todolist-backend.onrender.com`,
        },
        components: {
            securitySchemes: {
                bearerAuth: { // ตั้งค่าให้รองรับการใส่ Bearer Token ใน Swagger
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: `Example Token: ${process.env.TOKEN}`,
                },
            },
        },
        servers: [
            {
                url: "https://mt-todolist-backend.onrender.com/",
                description: 'CC22 SERVER',
            },]
    },

    apis: ['./routes/*.js', 'app.js'],
};

const specs = swaggerJsdoc(options);

export const swagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs,));
};