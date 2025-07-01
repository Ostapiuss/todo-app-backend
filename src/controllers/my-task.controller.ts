import { Request, Response } from 'express';

import { myTaskService } from '../services/my-tasks.service.ts';

export class MyTaskController {
  static getMyTasks = (req: Request, res: Response) => {
    const todos = myTaskService.getAllTasks();
    res.json(todos);
  };
}
