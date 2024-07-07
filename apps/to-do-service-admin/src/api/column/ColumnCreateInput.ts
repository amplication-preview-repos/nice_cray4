import { TaskCreateNestedManyWithoutColumnsInput } from "./TaskCreateNestedManyWithoutColumnsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ColumnCreateInput = {
  title?: string | null;
  order?: number | null;
  tasks?: TaskCreateNestedManyWithoutColumnsInput;
  project?: ProjectWhereUniqueInput | null;
};
