import express from 'express';
import { databaseConnection } from './database/connection.js';
import authRouter from './modules/auth/auth.controller.js'; 
import userRouter from './modules/user/user.controller.js';
import courseRouter from './modules/course/course.controller.js';
import sessionRouter from './modules/session/session.controller.js';
import questionRouter from './modules/question/question.controller.js';

export const bootstrap = () => {
    const app = express();
    databaseConnection;
    app.use(express.json());
    app.use('/api/auth',authRouter);
    app.use('/api/users',userRouter);
    app.use('/api/courses',courseRouter);
    app.use('/api/sessions',sessionRouter);
    app.use('/api/questions',questionRouter);

    const PORT = 4000;
    app.listen(PORT, () =>{
        console.log(`Sever is running on port ${PORT} !`);
    })
}