import { StatusTypes } from './common.model.ts';

export interface ITask {
  title: string;
  text: string;
  time: string;
  status: StatusTypes;
}
