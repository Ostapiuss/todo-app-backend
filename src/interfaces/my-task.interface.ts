import { StatusTypes } from './common.interface.ts';

export interface ITask {
  title: string;
  text: string;
  time: string;
  status: StatusTypes;
}
