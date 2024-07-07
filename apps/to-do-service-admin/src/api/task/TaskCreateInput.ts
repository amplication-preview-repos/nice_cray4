import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  order?: number | null;
  title?: string | null;
  column?: ColumnWhereUniqueInput | null;
};
