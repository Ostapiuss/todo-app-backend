import { Router } from 'express';
import myTasksRouter from './my-task.route.ts';

const router = Router();

router.use('/my-tasks', myTasksRouter);

export default router;
