import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    // 1. ดึง Token จาก Header (นิยมส่งในรูปแบบ Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // ถ้าไม่มี Token ส่งมา
    if (!token) {
        const error = new Error('No token provided');
        error.status = 401;
        return next(error); // ส่งไปที่ Error Middleware
    }

    // 2. ตรวจสอบความถูกต้องของ Token
    // เปลี่ยน 'your-secret-key' ให้ตรงกับตอน sign นะครับ
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
            const error = new Error('Failed to authenticate token');
            error.status = 403;
            error.message = "Failed to authenticate token"

            return next(error);
        }

        // 3. ถ้าผ่าน เก็บข้อมูล user ที่ decode ได้ลงใน req เพื่อให้ route ถัดไปใช้งาน
        req.user = decoded;
        next(); // ไปยังฟังก์ชันถัดไป (Route handler)
    });
};

export default verifyToken;