import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ColumnWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  order?: IntNullableFilter;
  tasks?: TaskListRelationFilter;
  project?: ProjectWhereUniqueInput;
};
