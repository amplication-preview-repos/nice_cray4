import { Column } from "../column/Column";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  owner: string | null;
  columns?: Array<Column>;
};
