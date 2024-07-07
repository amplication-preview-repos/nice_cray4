import { TaskUpdateManyWithoutColumnsInput } from "./TaskUpdateManyWithoutColumnsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ColumnUpdateInput = {
  title?: string | null;
  order?: number | null;
  tasks?: TaskUpdateManyWithoutColumnsInput;
  project?: ProjectWhereUniqueInput | null;
};
