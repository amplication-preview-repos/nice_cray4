import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
  column?: ColumnWhereUniqueInput;
};
