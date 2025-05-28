import { Router } from 'express';
import { getMyTasks } from '../controllers/my-task.controller';

const router = Router();

router.get('/', getMyTasks);

export default router;
