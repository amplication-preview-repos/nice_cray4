import { ColumnUpdateManyWithoutProjectsInput } from "./ColumnUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  title?: string | null;
  description?: string | null;
  owner?: string | null;
  columns?: ColumnUpdateManyWithoutProjectsInput;
};
