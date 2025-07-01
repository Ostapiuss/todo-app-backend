import { Router } from 'express';
import { MyTaskController } from '../controllers/my-task.controller.ts';

const router = Router();

router.get('/', MyTaskController.getMyTasks);

export default router;
