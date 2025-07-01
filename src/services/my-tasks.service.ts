import { ITask } from '../interfaces/my-task.interface.ts';

const todos: ITask[] = [
  {
    status: 'to-do',
    text: 'Some text 123123',
    time: '09:00 PM',
    title: 'My Title Server',
  },
];

const getAllTasks = () => {
  return todos;
};

export const myTaskService = { getAllTasks };
