import { StatusTypes } from "./common.model";

export interface ITask {
  title: string;
  text: string;
  time: string;
  status: StatusTypes;
}
