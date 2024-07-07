import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  order?: number | null;
  title?: string | null;
  column?: ColumnWhereUniqueInput | null;
};
