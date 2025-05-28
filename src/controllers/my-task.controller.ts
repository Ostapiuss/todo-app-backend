import { Request, Response } from 'express';

import { myTaskService } from '../services/my-tasks.service.ts';

export const getMyTasks = (req: Request, res: Response) => {
  const todos = myTaskService.getAllTasks();
  res.json(todos);
};
