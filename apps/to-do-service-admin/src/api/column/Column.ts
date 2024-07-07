import { Task } from "../task/Task";
import { Project } from "../project/Project";

export type Column = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  order: number | null;
  tasks?: Array<Task>;
  project?: Project | null;
};
