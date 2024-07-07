import { ColumnCreateNestedManyWithoutProjectsInput } from "./ColumnCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  title?: string | null;
  description?: string | null;
  owner?: string | null;
  columns?: ColumnCreateNestedManyWithoutProjectsInput;
};
