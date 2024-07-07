import { Column } from "../column/Column";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  order: number | null;
  title: string | null;
  column?: Column | null;
};
